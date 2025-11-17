import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
  return (
    <div className='bg-gray-100'>
    <div className='max-w-7xl mx-auto px-4 py-1'>
      <Navbar></Navbar>
      <main className='min-h-[calc(100vh-65px)]'>
         <Outlet></Outlet>
      </main>
     
      <Footer></Footer>
    </div></div>
  );
};

export default RootLayout;