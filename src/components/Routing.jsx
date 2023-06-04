import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tweets from "../pages/Tweets";
import Layout from "./Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}

export default Routing;
