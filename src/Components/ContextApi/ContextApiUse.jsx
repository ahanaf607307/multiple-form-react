import React, { useContext } from 'react'
import { UserContext } from './UserContext';


function ContextApiUse() {
    const { user } = useContext(UserContext);

  return (
    <div>
         <div>
      <h1>Welcome to the Home Page</h1>
      <p>User Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
    </div>
  )
}

export default ContextApiUse