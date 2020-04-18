import React, { useState, useEffect } from 'react';

// IMPORTS...
import Routes from './components/Routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { current_user, company_data } from './store/action/index';
import { auth } from './firebase/config';
import Loader from './components/Layout/Loader/Loader';

// SCSS...
import './App.scss';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState(false);

  const company = useSelector((state) => state.companyReducer.companyData);

  useEffect(() => {
    dispatch(company_data());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((curUser) => {
      if (curUser) {
        dispatch(current_user(curUser));
        setData(curUser);
        history.push('/');
      } else {
        setData(!curUser);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, history]);

  return <div className="App">{data ? <Routes /> : <Loader />}</div>;
};

export default App;
