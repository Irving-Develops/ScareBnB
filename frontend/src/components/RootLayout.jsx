import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar/Navbar'
import { useState } from 'react'

const RootLayout = () => {

  return (
    <>
    <Navbar />
      <main className='h-full'>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout