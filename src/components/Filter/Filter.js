import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getState } from '../../redux/contact-selectors';
import { actionSetFilter } from '../../redux/reduxActions';

const Filter = () => {
  const { filter } = useSelector(getState);
  const dispatch = useDispatch();
  const handleFilterChange = value => dispatch(actionSetFilter(value));
  return (
    <input
      className={style.input__filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => handleFilterChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};
export default Filter;
