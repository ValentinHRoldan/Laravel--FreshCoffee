import React from 'react'
// import { productos as data } from '../data/productos'
import Producto from '../components/Producto'
import useKiosco from '../hooks/useKiosco'
import useSWR from 'swr'
import clienteAxios from '../../config/axios'


export default function inicio() {

  const fetcher = ()=> clienteAxios('api/productos').then(data => data.data)
  
  const {data, error, isLoading} = useSWR('/api/productos', fetcher, {
    refreshInterval: 5000
  });

  const { categoriaActual } = useKiosco()
  if(isLoading) return 'Cargando...';
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id);
  return (
    <>
      <h1 className='text-4xl font-bold'>{ categoriaActual.nombre }</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuacion</p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {
        productos.map(producto => (
          <Producto 
            key={producto.imagen}
            producto={producto}
          />
        ))
        }
      </div>
    </>
  )
}
