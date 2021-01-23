import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  actionAddContact,
  actionRemoveContact,
  actionSetFilter,
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
});

const reducerFilter = createReducer('', {
  [actionSetFilter]: (_, { payload }) => payload,
});
export const rootReducer = combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
});
