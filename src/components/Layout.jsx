import { Outlet, Link, useLocation, useSearchParams } from "react-router-dom";
import Button from "@mui/material/Button";
import s from "./Layout.module.scss";
import { Container } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const Layout = () => {
  const [searchParams] = useSearchParams();
  const current = searchParams.get("filter");

  return (
    <>
      <Container maxWidth="1280px">
        <nav className={s.nav}>
          {current ? (
            <Link to="/">
              <Button variant="outlined">
                <KeyboardBackspaceIcon />
                Back
              </Button>
            </Link>
          ) : (
            <Link to="/tweets">
              <Button variant="outlined">Tweets</Button>
            </Link>
          )}
        </nav>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
