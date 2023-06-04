import { Outlet, Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from './Layout.module.scss';
import { Container } from '@mui/material';
const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Container maxWidth="1280px">
        <nav className={s.nav}>
          <Link to="/">
            <Button variant="outlined">HOME</Button>
          </Link>
          <Link to="/tweets">
            <Button variant="outlined">TWEETS</Button>
          </Link>
        </nav>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
