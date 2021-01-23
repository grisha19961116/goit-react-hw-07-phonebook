import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  actionAddContact,
  actionRemoveContact,
  actionSetFilter,
  actionGetContactsSuccess,
  actionContactError,
  actionContactRequest,
} from './reduxActions';

const reducerContacts = createReducer([], {
  [actionAddContact]: (state, { payload }) => {
    const itemsAdd = [...state, payload];
    return itemsAdd;
  },
  [actionRemoveContact]: (state, { payload }) => {
    const itemsRemove = [...state.filter(contact => contact.id !== payload)];
    return itemsRemove;
  },
  [actionGetContactsSuccess]: (state, { payload }) => {
    return payload;
  },
  [actionContactError]: (state, { payload }) => {
    return payload;
  },
});

const reducerFilter = createReducer('', {
  [actionSetFilter]: (_, { payload }) => payload,
});
const reducerLoading = createReducer('', {
  [actionContactRequest]: (_, { payload }) => payload,
  [actionContactError]: (_, { payload }) => payload,
});
export const rootReducer = combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
  isLoading: reducerLoading,
});
