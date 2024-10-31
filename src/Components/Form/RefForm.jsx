import React, { useEffect, useRef } from "react";

function RefForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus()
  },[])
  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <div>
      <h1 className="text-5xl mb-3">Ref Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          ref={nameRef}
          name="name"
          placeholder="Name"
          class="input input-bordered w-full max-w-xs"
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          class="input input-bordered w-full max-w-xs"
          defaultValue="@gmail.com"
        />
        <input
          ref={passRef}
          type="password"
          name="password"
          placeholder="Password"
          class="input input-bordered w-full max-w-xs"
        />

        <button class="btn btn-accent text-white w-24">
          <input type="submit" value="Submit" />{" "}
        </button>
      </form>
    </div>
  );
}

export default RefForm;
