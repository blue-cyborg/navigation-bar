import React from 'react';

export default function Signin() {
    function handleSubmit(event) {
    event.preventDefault();
    alert("login");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
  );
}