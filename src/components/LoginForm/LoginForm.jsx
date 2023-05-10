import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { logIn } from 'store/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="email">
        Email
      </label>
      <input
        className={css.input}
        id="email"
        name="email"
        type="email"
        required={true}
      ></input>
      <label className={css.label} htmlFor="password">
        Password
      </label>
      <input
        className={css.input}
        id="password"
        name="password"
        type="password"
        minLength={7}
        required={true}
      ></input>
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};
