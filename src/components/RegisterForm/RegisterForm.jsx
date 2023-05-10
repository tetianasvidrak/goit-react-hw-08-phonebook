import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'store/auth/operations';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input
        className={css.input}
        id="name"
        name="name"
        required={true}
      ></input>
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
