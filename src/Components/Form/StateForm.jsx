import React, { useState } from 'react'

function StateForm() {
    const [name , setName] = useState(null)
    const [email , setEmail] = useState(null)
    const [password , setPassword] = useState(null)
    const [error , setError] = useState ('')
    const handleSubmit = (e) => {
       e.preventDefault()
       if(password.length < 6) {
         setError('Password Must be 6 charecter or longer')
       }else{

           console.log(name , email , password);
       }
    }

    const nameChange = (e) => {
setName(e.target.value)
    }

    const emailChange = e => {
setEmail(e.target.value)
    }
    const passwordChange = e => {
        setPassword(e.target.value)
    }
  return (
    <div>
         <h1 className="text-5xl mb-3">State with Form</h1>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" onChange={nameChange} name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
        <input  onChange={emailChange} type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
        <input  onChange={passwordChange} type="password" name='password' placeholder="Password" class="input input-bordered w-full max-w-xs" />
        {
            error && <p> {error} </p>
        }
        <button class="btn btn-accent text-white w-24"><input type="submit" value="Submit"/> </button>
        </form>
    </div>
  )
}

export default StateForm