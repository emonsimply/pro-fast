import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import ProFastLogo from '../pages/shared/ProFastLogo/ProFastLogo';

const AuthLayout = () => {
  return (
    <div className='max-w-7xl mx-auto flex h-screen '>
      <div className='p-10 w-1/2'>
        <ProFastLogo></ProFastLogo>
        <Outlet></Outlet>
      </div>
      <div className='bg-[#FAFDF0] w-1/2 justify-center items-center flex'>
        <img src={authImg} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;