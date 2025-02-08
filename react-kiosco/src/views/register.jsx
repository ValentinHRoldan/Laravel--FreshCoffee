import React from 'react'
import { Link } from 'react-router-dom'

export default function register() {
  return (
    <>
      <h1 className='text-4xl font-black'>Registrate</h1>
      <p>Crea tu cuenta en simples pasos</p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form>
          <div className='mb-4'>
            <label
              className='text-slate-800'
              htmlFor='name'>
              Nombre:
            </label>
            <input 
              type="text"
              id='name'
              className='mt-2 w-full p-3 bg-gray-100 rounded-sm'
              name='name'
              placeholder='Tu nombre' />
          </div> 

          <div className='mb-4'>
            <label
              className='text-slate-800'
              htmlFor='email'>
              Email:
            </label>
            <input 
              type="text"
              id='email'
              className='mt-2 w-full p-3 bg-gray-100 rounded-sm'
              name='email'
              placeholder='Tu Correo' />
          </div>  

          <div className='mb-4'>
            <label
              className='text-slate-800'
              htmlFor='password'>
              Contraseña:
            </label>
            <input 
              type="password"
              id='password'
              className='mt-2 w-full p-3 bg-gray-100 rounded-sm'
              name='password'
              placeholder='Tu Contraseña' />
          </div>  

          <div className='mb-4'>
            <label
              className='text-slate-800'
              htmlFor='password_confirmation'>
              Repite tu Contraseña:
            </label>
            <input 
              type="password"
              id='password_confirmation'
              className='mt-2 w-full p-3 bg-gray-100 rounded-sm'
              name='password_confirmation'
              placeholder='Repite tu contraseña' />
          </div>  
          <input 
            type="submit"
            value="Crear Cuenta"
            className='bg-yellow-600 hover:bg-yellow-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
          />
        </form>
      </div>

      <nav className='mt-5'>
        <Link to="/auth/login" className='hover:text-gray-500' >¿Ya tenés cuenta? Inicia Sesion</Link>        
      </nav>
    </>
  )
}
