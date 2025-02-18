import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import Modal from 'react-modal'

export default function layout() {
  return (
    <>
      <div className='md:flex'>
        <Sidebar/>
        <main className='flex-1 h-screen overflow-y-scroll'>
          <Outlet/>
        </main>
        <Resumen/>
      </div>
    </>
  )
}
