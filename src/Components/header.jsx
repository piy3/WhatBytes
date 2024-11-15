"use client"
import React from 'react'

function Header() {
  return (
    <> 
      <div className='h-[50px] w-full border flex items-center relative'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnWPFEZW4ZR90k7SRhE7c_NKjgSpAduvOqQ&s'
          alt='logo'
          className='object-fill h-[48px] w-18'
        />
        <div className='flex justify-center w-fit'>
          <p className='text-lg font-bold'>WhatBytes</p>
        </div>
        <div className='ml-auto sm:flex items-center hidden border rounded-md hover:bg-green-400 transition ease-in-out delay-100 '>
          <button className='flex items-center  p-1'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg'
              alt='profile'
              className='h-8 w-8 rounded-full'
            />
            <span className='font-medium'>Piyush Yadav</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
