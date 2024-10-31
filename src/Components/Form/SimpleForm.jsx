import React from 'react'

function SimpleForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log('form submit');
    }
  return (
    <div>
        <h1 className="text-5xl mb-3">Simple Form</h1>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
        <input type="text" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
        <button class="btn btn-accent text-white w-24"><input type="submit" value="Submit"/> </button>
        </form>
    </div>
  )
}

export default SimpleForm