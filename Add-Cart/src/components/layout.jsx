import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Carttab from './Carttab'

const Layout = () => {
  return (
    <div className='bg-zinc-200 min-h-screen'>
      <main className="w-[1200px] max-w-full m-auto p-5">
        <Header />
        <Outlet />
      </main>
      <Carttab />
    </div>
  )
}

export default Layout
