import { createAction } from '@reduxjs/toolkit';

const actionAddContact = createAction('items/add', newContact => ({
  payload: newContact,
}));

const actionRemoveContact = createAction('items/remove', id => ({
  payload: id,
}));
const actionSetFilter = createAction('filter/addFilter', filter => ({
  payload: filter,
}));

export { actionAddContact, actionRemoveContact, actionSetFilter };
