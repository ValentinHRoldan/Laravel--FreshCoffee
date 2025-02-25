import React from 'react'
import Categoria from './Categoria'
import useKiosco from '../hooks/useKiosco';
import { useAuth } from '../hooks/useAuth';

export default function sidebar() {
  const { categorias } = useKiosco();
  const { logout, user } = useAuth({middleware:'auth'});
  return (
    <aside className='md:w-72'>
      <div className="p-4">
        <img src="/img/logo.svg" alt="" className='w-40' />
      </div>
      <p className='my-10 text-xl text-center'>Bienvenido! <span className='text-amber-500 font-bold'>{user?.name}</span></p>
      <div className="mt-10">
        {categorias.map(categoria => (
          <Categoria 
            key={categoria.id}
            categoria={categoria}
            />
        ))}
      </div>
      <div className='my-5 px-3'>
        <button type='button' className='text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-800'
        onClick={logout}>
        Cerrar Sesion
        </button>
      </div>
    </aside>
  )
}
