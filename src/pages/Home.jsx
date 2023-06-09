// import PropTypes from 'prop-types';
import Tweet from "@/components/Tweet/Tweet";
import { useState } from "react";
import s from "./Home.module.scss";
import ScrollToTop from "react-scroll-to-top";

import { useGetUsersQuery } from "@/api/store";

const Home = () => {
  const { data = [] } = useGetUsersQuery();

  const cardsInRow = 3;
  const [nextNumber, setNextNumber] = useState(cardsInRow);

  const handleLoadMore = () => {
    setNextNumber(nextNumber + cardsInRow);
  };

  return (
    <div>
      <ul className={s.homePage}>
        {data.slice(0, nextNumber).map((item) => (
          <Tweet key={item.id} {...item} />
        ))}
      </ul>
      {nextNumber < data.length && (
        <button type="button" className={s.loadBtn} onClick={handleLoadMore}>
          Load More
        </button>
      )}
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

export default Home;
