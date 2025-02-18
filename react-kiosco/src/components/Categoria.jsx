import React from 'react'
import useKiosco from '../hooks/useKiosco';

export default function Categoria({categoria}) {
    const {handleClickCategoria, categoriaActual} = useKiosco();
    const {icono,id,nombre} = categoria;
    return (
        <div className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
            <img src={`/img/icono_${icono}.svg`} alt="Icono comida" className='w-12' />
            <button 
                className='text-lg font-bold cursor-pointer truncate w-full text-left'
                type='button'
                onClick={(e)=>{
                    handleClickCategoria(id)
                }}
                >
                {nombre}
            </button>
        </div>
        
    )
}
