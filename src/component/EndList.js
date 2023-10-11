import React from 'react'

const EndList = () => {
  return (
    <div className='mt-16 text-center border-t border-gray-400'>
      <h1 className='font-black text-4xl text-gray-600 pt-7'>Thank You for Visit</h1>
      <h2 className='font-bold text-2xl text-yellow-700 mt-7 mb-4'>Subhajit Majhi</h2>
      <a href='https://subhajitmajhi-ui.netlify.app/' rel="noreferrer" target='_blank' className='font-bold text-xl text-cyan-700 hover:text-red-600 italic'>https://subhajitmajhi-ui.netlify.app/</a>
      <div className='flex justify-between font-bold text-base text-red-600 italic mt-8'>
        <a href='mailto:subhajit.majhi@gmail.com' rel="noreferrer" target='_blank' className='hover:text-black'>subhajit.majhi@gmail.com</a>
        <a href='tel:+91-9836814898' rel="noreferrer" target='_blank' className='hover:text-black'>+91-9836814898</a>
        <a href='tel:+91-7980941819' rel="noreferrer" target='_blank' className='hover:text-black'>+91-7980941819</a>
      </div>
    </div>
  )
}

export default EndList
