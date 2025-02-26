import React from 'react'
import clienteAxios from '../../config/axios';
import useSWR from 'swr';
import useKiosco from '../hooks/useKiosco';

export default function Ordenes() {
    const token = localStorage.getItem('AUTH.TOKEN');
    const { handleClickCompletarPedido } = useKiosco();
    const fetcher = () => clienteAxios('/api/pedidos', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    const {data, error, isLoading} = useSWR('/api/pedidos', fetcher, {
        refreshInterval: 5000
    });
    if(isLoading) return 'Cargando...'
    console.log(data?.data);
    console.error(error);
    console.warn(isLoading);
    return (
        <div className='ml-4'>
            <h1 className='text-4xl font-bold'> Ordenes </h1>
            <p className='text-2xl my-10'>Administra las ordenes desde acá</p>
            <div className='grid grid-cols-2 gap-2'>
                {data.data.data.map(pedido => (
                    <div key={pedido.id} className='p-5 bg-white shadow space-y-2 border-b'>
                        <p className='text-xl font-bold text-slate-600'>
                            Contenido del pedido
                        </p>
                        {pedido.productos.map(producto => (
                            <div key={producto.id} className='border-b-slate-200 last-of-type:border-none py-4'>
                                <p className='text-sm'>ID: {producto.id}</p>
                                <p className='text-xl'>{producto.nombre}</p>
                                <p>
                                    Cantidad: {''}
                                    <span className='font-bold'>{producto.pivot.cantidad}</span>
                                </p>
                            </div>
                        ))}
                        <p className="text-lg font-bold text-slate-600">
                            Cliente:{' '}
                            <span className='font-normal'>{pedido.user.name}</span>
                        </p>
                        <p className="text-lg font-bold text-amber-500">
                            Total a pagar:{' '}
                            <span className='font-normal text-slate-700'>${pedido.total}</span>
                        </p>
                        <button type="button" 
                        className='bg-indigo-600 hover:bg-indigo-800 px-5 py-3 rounded uppercase font-bold text-white text-center w-full cursor-pointer mt-5'
                        onClick={() => handleClickCompletarPedido(pedido.id)}>
                            Completar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
