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
const actionContactRequest = createAction('items/request', value => ({
  payload: value,
}));
const actionGetContactsSuccess = createAction('items/success', contacts => ({
  payload: contacts,
}));
const actionContactError = createAction('items/error', value => ({
  payload: value,
}));
// Напиши Redux-операции для работы с асинхронными запросами по паттерну request, success и error.
export {
  actionAddContact,
  actionRemoveContact,
  actionSetFilter,
  actionContactRequest,
  actionGetContactsSuccess,
  actionContactError,
};
