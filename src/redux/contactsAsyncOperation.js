import {
  actionContactLoading,
  actionGetContactsSuccess,
  actionGetContactError,
} from './reduxActions';
import { asyncGetContacts } from '../data-api/api-contacts';

const asyncOperationGetContacts = () => async dispatch => {
  try {
    dispatch(actionContactLoading(true));
    const data = await asyncGetContacts();
    dispatch(actionGetContactsSuccess(data));
  } catch (error) {
    dispatch(actionGetContactError([]));
  } finally {
    dispatch(actionContactLoading(false));
  }
};

export { asyncOperationGetContacts };
