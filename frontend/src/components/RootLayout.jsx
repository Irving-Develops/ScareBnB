import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
      <div>RootLayout</div>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout