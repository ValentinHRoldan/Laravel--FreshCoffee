import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Resumen from '../components/Resumen'

export default function layout() {
  return (
    <>
      <div className='md:flex'>
        <Sidebar/>
        <main className='flex-1'>
          <Outlet/>
        </main>
        <Resumen/>
      </div>
    </>
  )
}
