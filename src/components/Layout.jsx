import { Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import s from "./Layout.module.scss";
const Layout = () => {
  return (
    <>
      <nav className={s.nav}>
        <Link to="/">
          <Button variant="outlined">HOME</Button>
        </Link>
        <Link to="/tweets">
          <Button variant="outlined">TWEETS</Button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
