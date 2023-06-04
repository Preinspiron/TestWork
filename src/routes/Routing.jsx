import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tweets from "../pages/Tweets";
import Layout from "../components/Layout";
import _404 from "@/pages/_404";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<_404 />}></Route>
    </Routes>
  );
}

export default Routing;
