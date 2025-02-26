import React from 'react'
import { formatearDinero } from '../helpers';
import useKiosco from '../hooks/useKiosco';

export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {
  const {nombre, imagen, precio} = producto;
  const { handleClickModal, handleSetProducto, handleClickProductoAgotado } = useKiosco();

  return (
    <div className='border p-3 shadow bg-white'>
      <img src={`/img/${imagen}.jpg`} alt={`Imagen ${nombre}`} className='w-full' />
      <div>
        <h3 className='text-2xl font-bold'>{nombre}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>{`$${formatearDinero(precio)}`}</p>
      </div>
      {botonAgregar && (
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
          onClick={()=>{
            handleClickModal();
            handleSetProducto(producto);
          }}>
          Agregar    
        </button>
      )}
      {botonDisponible && (
        <button
          type='button'
          className='bg-rose-700 hover:bg-rose-800 text-white w-full mt-5 p-3 uppercase font-bold'
          onClick={()=>{
            handleClickProductoAgotado(producto.id)
          }}>
          Producto Agotado   
        </button>        
      )}
    </div>
  )
}
