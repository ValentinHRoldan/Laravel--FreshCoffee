import React from 'react'
import { Link } from 'react-router-dom'
import { createRef, useState } from 'react'
import clienteAxios from '../../config/axios';
import Alerta from '../components/Alerta';

export default function login() {
  const [errores, setErrores] = useState([]);

  const emailRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = async e =>{
    e.preventDefault();
    const datos = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    try {
      const { data }= await clienteAxios.post('api/login', datos);
      localStorage.setItem('AUTH.TOKEN', data.token);
      setErrores([]);
    } catch (error) {
      console.log(error);
      setErrores(Object.values(error.response.data.errors));
    }
  }
  return (
    <>
      <h1 className='text-4xl font-black'>Inicia Sesion</h1>
      <p>Ingresa a tu cuenta</p>
      <div className='bg-white shadow-md rounded-md mt-10 px-5 py-10'>
        <form onSubmit={handleSubmit}>
        {errores.length !== 0 ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
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
              placeholder='Tu Correo'
              ref={emailRef} />
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
              placeholder='Tu Contraseña'
              ref={passwordRef} />
          </div>  
 
          <input 
            type="submit"
            value="Iniciar Sesion"
            className='bg-yellow-600 hover:bg-yellow-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
          />
        </form>
      </div>

      <nav className='mt-5'>
        <Link to="/auth/register" className='hover:text-gray-500' >¿No tenés cuenta? Crea una</Link>        
      </nav>
    </>
  )
}
