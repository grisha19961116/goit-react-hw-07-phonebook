import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContactsMemo } from '../../redux/contact-selectors';
import { actionRemoveContact } from '../../redux/reduxActions';
import { deletePostContacts } from '../../data-api/api-contacts';
import style from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContactsMemo);
  const dispatch = useDispatch();
  const onRemove = async id => {
    await deletePostContacts(id);
    dispatch(actionRemoveContact(id));
  };

  return visibleContacts.length !== 0 ? (
    <ul className={style.contactUl}>
      {visibleContacts.map(({ id, name, phone }) => {
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
  ) : null;
};

export default ContactList;
