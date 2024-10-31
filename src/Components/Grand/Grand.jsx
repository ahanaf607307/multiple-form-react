import React from 'react'


import { Outlet, useNavigate } from 'react-router-dom'

function Grand() {
    const navigate = useNavigate()
    const handleCat = () => {
        navigate('cat')
    }
    const handleMat = () => {
        navigate('mat')
    }
    const handleFat = () => {
        navigate('fat')
    }
  return (
    <div>
        <div className='text-5xl font-bold text-center'>
            Grand
        </div>
        <div className='grid md:grid-cols-3 gap-5 border border-teal-500 md:p-5'>
           
           <button onClick={handleCat} className="btn">Cat</button>
           <button onClick={handleMat} className="btn">Mat</button>
           <button onClick={handleFat} className="btn">Fat</button>
            
        </div>
        <div className='text-center flex justify-center items-center p-7'>
            <Outlet/>
            </div>
    </div>
  )
}

export default Grand