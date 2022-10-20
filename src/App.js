import Router from './route/Router';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './components/ui/Spinner';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { getAccessToken } from './utils/localStorage';
import { thunkGetMe } from './reduxStore/AuthSlice';

function App() {
  const state = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await dispatch(thunkGetMe());
        }
      } catch (err) {
        // console.log(err);
      }
    };
    console.log('KUY');
    fetchMe();
  }, [dispatch]);

  return (
    <>
      {state.showLoading && <Spinner />}
      <Router />
      <ToastContainer autoClose="3000" theme="light" />
    </>
  );
}

export default App;
