import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
  return (
    <div className='bg-gray-100'>
    <div className='max-w-7xl mx-auto px-4 py-1'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div></div>
  );
};

export default RootLayout;