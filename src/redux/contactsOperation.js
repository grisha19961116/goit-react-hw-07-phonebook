import {
  actionContactRequest,
  actionGetContactsSuccess,
  actionContactError,
} from './reduxActions';
import { asyncGetContacts } from '../data/api-contacts';
const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000';

const asyncOperationGetContacts = () => async dispatch => {
  try {
    dispatch(actionContactRequest(true));
    const data = await asyncGetContacts();
    dispatch(actionGetContactsSuccess(data));
  } catch (error) {
    dispatch(actionContactError([]));
    dispatch(actionContactRequest(false));
  }
};

export { asyncOperationGetContacts };
