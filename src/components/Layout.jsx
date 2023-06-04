import { Outlet, Link, useLocation, useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import s from './Layout.module.scss';
import { Container } from '@mui/material';
const Layout = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const current = searchParams.get('filter');
  current && console.log('current');
  return (
    <>
      <Container maxWidth="1280px">
        <nav className={s.nav}>
          {current ? (
            <Link to="/">
              <Button variant="outlined">Back</Button>
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
