import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getState } from './redux/contact-selectors.js';
import Loader from 'components/Loader/Loader.js';
import ContactList from 'components/ContactList/ContactList.js';
import ContactForm from 'components/ContactForm/ContactForm.js';
import Filter from 'components/Filter/Filter.js';
import style from './App.module.css';

function App() {
  const { isLoading } = useSelector(getState);
  return (
    <>
      <h2 className={style.titleList}>From Contact</h2>
      <ContactForm />
      <h2 className={style.titleList}>Contacts list</h2>
      <Filter />
      {isLoading ? <Loader /> : <ContactList />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
