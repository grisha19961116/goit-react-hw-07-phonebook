import { createAction } from '@reduxjs/toolkit';
const actionAddContact = createAction('items/add', contact => ({
  payload: contact,
}));
const actionRemoveContact = createAction('items/remove', id => ({
  payload: id,
}));
const actionSetFilter = createAction('filter/addFilter', filter => ({
  payload: filter,
}));
const actionContactLoading = createAction('items/request', flag => ({
  payload: flag,
}));
const actionGetContactsSuccess = createAction('items/success', contacts => ({
  payload: contacts,
}));
const actionGetContactError = createAction('items/error', value => ({
  payload: value,
}));

export {
  actionAddContact,
  actionRemoveContact,
  actionSetFilter,
  actionContactLoading,
  actionGetContactsSuccess,
  actionGetContactError,
};
