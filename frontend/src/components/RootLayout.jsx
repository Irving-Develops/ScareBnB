import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar/Navbar'

const RootLayout = () => {

  return (
    <>
    <Navbar />
      <main className=''>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout