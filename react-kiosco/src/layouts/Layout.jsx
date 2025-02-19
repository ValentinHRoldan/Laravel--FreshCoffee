import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import Modal from 'react-modal'
import useKiosco from '../hooks/useKiosco'
import ModalProducto from '../components/ModalProducto'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export default function layout() {

  const { modal, handleClickModal } = useKiosco();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  return (
    <>
      <div className='md:flex'>
        <Sidebar/>
        <main className='flex-1 h-screen overflow-y-scroll'>
          <Outlet/>
        </main>
        <Resumen/>
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto handleClickModal={handleClickModal}/>
      </Modal>
      <ToastContainer/>
    </>
  )
}
