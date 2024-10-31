import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Home'
import SimpleForm from './Components/Form/SimpleForm'
import StateForm from './Components/Form/StateForm'
import RefForm from './Components/Form/RefForm'
import CustomHookForm from './Components/Form/CustomHookForm'
import Grand from './Components/Grand/Grand'



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
    {
path:'/hookForm',
element: <CustomHookForm/>
    },
    {
path:'/grand',
element: <Grand/>
    },
   ]
  },

  
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
