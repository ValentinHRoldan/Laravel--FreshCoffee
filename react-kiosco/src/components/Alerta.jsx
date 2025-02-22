import React from 'react'

export default function Alerta({children}) {
  return (
    <div className='text-center my-2 bg-red-700 text-white font-bold p-3 uppercase'>{children}</div>
  )
}
