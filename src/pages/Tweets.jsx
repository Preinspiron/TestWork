/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Dna } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Tweet from "../components/Tweet/Tweet";
import Filter from "../components/Filter/Filter";
import { useGetUsersQuery } from "@/api/store";
import { useSearchParams, useParams } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import s from "../pages/Tweets.module.scss";
import { useSelector } from "react-redux";
// import { filterOptions } from "./options";
import ScrollToTop from "react-scroll-to-top";

const Tweets = () => {
  const { data = [], isFetching } = useGetUsersQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const idiesArr = useSelector((state) => state.followers.follows);
  const idies = idiesArr.map((el) => el.id);

  // useEffect(() => setSearchParams({ filter: 'all' }), []);
  // const name = searchParams.get("filter") ?? "";
  const filterName = searchParams.get("filter") ?? "all";

  useEffect(() => {
    setSearchParams({ filter: filterName });
  }, []);

  const change = (filter) => setSearchParams({ filter });

  return (
    <div className={s.container}>
      <Filter change={change} urlValue={filterName} />

      <ul className={s.tweets_list}>
        {filterName === "followings" &&
          data
            .filter((user) => idies.includes(user.id))
            .map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
                isFetching={isFetching}
              />
            ))}

        {filterName === "follow" &&
          data
            .filter((user) => !idies.includes(user.id))
            .map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
              />
            ))}

        {filterName === "all" &&
          data.map((user) => (
            <Tweet
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              followers={user.followers}
              tweets={user.tweets}
            />
          ))}
      </ul>

      <ScrollToTop
        smooth
        style={{
          marginTop: "100px",
          // marginBottom: "100px",
        }}
      />
    </div>
  );
};

export default Tweets;
