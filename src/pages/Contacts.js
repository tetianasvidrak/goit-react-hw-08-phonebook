import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from '../components/App.module.css';

const Contacts = () => {
  return (
    <>
      <h1 className={css['primary-title']}>Phonebook</h1>
      <div className={css.contacts}>
        <div className={css.flex}>
          <ContactForm />
          <Filter />
        </div>
        {/* <h2 className={css['secondary-title']}>Contacts</h2> */}
        <ContactList />
      </div>
    </>
  );
};

export default Contacts;
