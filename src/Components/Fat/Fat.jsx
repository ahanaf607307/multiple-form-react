import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Fat() {
  return (
    <div className='text-5xl font-bold border border-teal-500'>Fat
    <br />
   <button className="btn"> <Link  to="fatTwo">Go to Fat Two</Link></button>
    <Outlet/>
    </div>
  )
}

export default Fat