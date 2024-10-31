import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <div class="flex flex-col md:flex-row  justify-center items-center md:justify-between bg-[#000B58] text-white font-bold">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">CRS</a>
  </div>
  <div class="">
    <ul id="navlink" class="menu menu-horizontal px-2 flex gap-x-7 text-gray-300">
    <NavLink to='/'>Home</NavLink>
      
      <NavLink to='/simpleform'>Simple Form</NavLink>
      <NavLink to='/stateForm'>State Form</NavLink>
      <NavLink to='/refForm'>Ref Form</NavLink>
      <NavLink to='/hookForm'>Hook Form</NavLink>
      <NavLink to='/grand'>Grand</NavLink>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar