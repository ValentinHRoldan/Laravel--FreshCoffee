import React from 'react'
import useKiosco from '../hooks/useKiosco'
import ResumenProducto from './ResumenProducto';
import { formatearDinero } from '../helpers';

export default function Resumen() {
  const { pedido, total } = useKiosco();

  const comprobarPedido = ()=> pedido.length === 0;

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className="text-4xl font-black">Mi pedido</h1>
      <p className='text-lg my-5'>Acá encontraras el resumen de tu pedido</p>
      <div className="py-10">
        {pedido.length === 0 ? (
          <p className='text-center text-2xl'>No hay productos en tu pedido todavia!</p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto 
            key={producto.id}
            producto={producto}/>
          ))
        )}
      </div>
      <p className='text-xl mt-10'>
        {`Total: ${formatearDinero(total)}`}
      </p>
      <form className=''>
        <div className="">
          <input type="submit" 
          className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} px-5 py-3 rounded uppercase font-bold text-white text-center w-full cursor-pointer mt-5`}
          value='Confirmar Pedido'
          disabled={comprobarPedido()}/>
        </div>
      </form>
    </aside>
  )
}
