import './App.css';
import React, {useEffect} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

import { setScreenWidth } from '../../requests/app';
import {getCompanyInfo} from '../../requests/profile'

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch()
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })
  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken && !companyQuantityInfo){
      dispatch(getCompanyInfo())
    }
  },[dispatch, companyQuantityInfo])
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
