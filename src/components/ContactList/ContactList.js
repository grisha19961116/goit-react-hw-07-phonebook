import style from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveContact } from '../../redux/reduxActions';

const ContactList = () => {
  const { items, filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const onRemove = valueInput => dispatch(actionRemoveContact(valueInput));

  const getVisibleContacts = (items, filterInput) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterInput.toLowerCase()),
    );
  };

  if (items.length === 0) return null;

  return (
    <ul>
      {getVisibleContacts(items, filter).map(({ id, name, phone }) => {
        return (
          <li key={id}>
            {name} : {phone}
            <button
              onClick={() => {
                onRemove(id);
              }}
              className={style.button__delete}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
