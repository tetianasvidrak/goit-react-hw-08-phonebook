import ContactElement from './ContactElement';
import css from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'store/contactsOperations';

const ContactList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onDeleteHandler = (event, id) => {
    event.preventDefault();
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {error && <div>{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : items.length ? (
        filteredContacts.map(contact => (
          <ContactElement
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteHandler={event => onDeleteHandler(event, contact.id)}
          />
        ))
      ) : undefined}
    </ul>
  );
};

export default ContactList;
