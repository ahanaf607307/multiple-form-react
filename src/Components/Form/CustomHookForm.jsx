import React from 'react'
import useInputState from '../Hook/Hook'

function CustomHookForm() {
    // const [name , setName ] = useInputState('') {array er jonno}
    const nameState = useInputState('')
    const handleSubmit = e => {
        console.log('change hook' , nameState.value);
        e.preventDefault()
    }
  return (
    <div>
        <h1 className="text-5xl mb-3">Custom Hook Form</h1>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input {...nameState} type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
        <input type="text" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
        <button class="btn btn-accent text-white w-24"><input type="submit" value="Submit"/> </button>
        </form>
    </div>
  )
}

export default CustomHookForm