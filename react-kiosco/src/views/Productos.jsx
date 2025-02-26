import React from 'react'
import Producto from '../components/Producto';
import clienteAxios from '../../config/axios';
import useSWR from 'swr';

export default function Productos() {
  const token = localStorage.getItem('AUTH.TOKEN');
  const fetcher = ()=> clienteAxios.get('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data);
  const {data, error, isLoading} = useSWR('/api/productos', fetcher, {
    refreshInterval: 5000
  });
  if(isLoading) return "Cargando...";
  console.log(data.data);
  return (
    <div className='ml-4'>
      <h1 className='text-4xl font-bold'> Productos </h1>
      <p className='text-2xl my-10'>Administra los productos desde acá</p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {
        data.data.map(producto => (
          <Producto 
            key={producto.imagen}
            producto={producto}
            botonDisponible={true}
          />
        ))
        }
      </div>
    </div>
  )
}
