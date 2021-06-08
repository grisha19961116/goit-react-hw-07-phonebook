import { useSelector, useDispatch } from 'react-redux';
import { getState } from '../../redux/contact-selectors';
import { actionRemoveContact } from '../../redux/reduxActions';
import { deletePostContacts } from '../../data-api/api-contacts';
import style from './ContactList.module.css';

const ContactList = () => {
  const { contacts, filter } = useSelector(getState);
  const dispatch = useDispatch();
  const onRemove = async id => {
    await deletePostContacts(id);
    dispatch(actionRemoveContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return contacts.length !== 0 ? (
    <>
      <ul className={style.contactUl}>
        {getVisibleContacts().map(({ id, name, phone }) => {
          return (
            <li className={style.contactLi} key={id}>
              <p className={style.name}>{name}</p>
              <p className={style.phone}>{phone}</p>
              <p
                onClick={() => {
                  onRemove(id);
                }}
                className={style.p__delete}
              >
                Delete
              </p>
            </li>
          );
        })}
      </ul>
    </>
  ) : null;
};

export default ContactList;
