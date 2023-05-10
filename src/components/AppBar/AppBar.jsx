import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Nav';
import css from './AppBar.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
