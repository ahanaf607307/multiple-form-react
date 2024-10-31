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
import Mat from './Components/Mat/Mat'
import Cat from './Components/Cat/Cat'
import Fat from './Components/Fat/Fat'
import FatTwo from './Components/Fat/FatTwo'

import { UserProvider } from './Components/ContextApi/UserContext';
import ContextApiUse from './Components/ContextApi/ContextApiUse'

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
path:'/contextApi',
element: <ContextApiUse/>
    },
    {
path:'/grand',
element: <Grand/>,
children: [
  {
    path:'mat',
    element: <Mat/>
  },
  {
    path:'cat',
    element:<Cat/>
  },
  {
    path:'fat',
    element:<Fat/> ,
    children: [
      {
        path:'fatTwo',
        element:<FatTwo/>
      }
    ]
  }
]
    },
   ]
  },

  
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
</React.StrictMode>
)
