import style from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { actionAddContact } from '../../redux/reduxActions';

function ContactForm() {
  const { items } = useSelector(state => state);
  const dispatch = useDispatch();
  const onAdd = newContact => dispatch(actionAddContact(newContact));

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        console.log('Sorry, we are not have ' + name + '.');
    }
  };
  const handleCheckUniqueContact = (arrayItems, nameContact) => {
    const isExistContact = !!arrayItems.find(
      contact => contact.name === nameContact,
    );
    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  };

  const validateFrom = () => {
    if (!name || !phone) {
      toast('Some filed is empty');
      return false;
    }

    return handleCheckUniqueContact(items, name);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleFromSubmit = e => {
    e.preventDefault();
    const isValidForm = validateFrom();

    if (!isValidForm) return;

    const newContact = { id: uuidv4(), name, phone };
    resetForm();
    return onAdd(newContact);
  };

  return (
    <form onSubmit={handleFromSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleChangeForm}
      ></input>
      <input
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChangeForm}
      ></input>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
