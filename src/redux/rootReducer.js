import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  actionAddContact,
  actionRemoveContact,
  actionSetFilter,
  actionGetContactsSuccess,
  actionGetContactError,
  actionContactLoading,
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
  [actionGetContactsSuccess]: (_state, { payload }) => {
    return payload;
  },
  [actionGetContactError]: (_state, { payload }) => {
    return payload;
  },
});

const reducerFilter = createReducer('', {
  [actionSetFilter]: (_, { payload }) => payload,
});
const reducerLoading = createReducer(false, {
  [actionContactLoading]: (_, { payload }) => payload,
});

export const rootReducer = combineReducers({
  contacts: reducerContacts,
  filter: reducerFilter,
  isLoading: reducerLoading,
});
