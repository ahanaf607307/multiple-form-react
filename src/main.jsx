import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Home'
import SimpleForm from './Components/Form/SimpleForm'
import StateForm from './Components/Form/StateForm'
import RefForm from './Components/Form/RefForm'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
   children: [
    {
path:'/simpleform',
element: <SimpleForm/>
    },
    {
path:'/stateForm',
element: <StateForm/>
    },
    {
path:'/refForm',
element: <RefForm/>
    },
   ]
  },

  
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
