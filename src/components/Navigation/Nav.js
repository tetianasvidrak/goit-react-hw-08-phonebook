import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';
import { useAuth } from 'hooks';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
    </nav>
  );
}
