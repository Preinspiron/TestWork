import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tweets from "../pages/Tweets";

import Layout from "../components/Layout";
import { useGetUsersQuery, usePutUserMutation } from "@/api/store";
import _404 from "@/pages/_404";

function Routing() {
  const { data, isFetching } = useGetUsersQuery();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        {/* <Route path="tweets/:filter" element={<Tweet />} /> */}
      </Route>
      <Route path="*" element={<_404 />}></Route>
    </Routes>
  );
}

export default Routing;
