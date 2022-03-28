import React from 'react';

export default function Signin() {
    function handleSubmit(event) {
    event.preventDefault();
    alert("login");
  }

  return (
    <div className='Login'>
    <h1>Sign in to your account</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
    </div>
  );
}