import React, { useState } from 'react';
import { users } from './users';

const Login = ({ setIsLogged, user, setUser }) => {
  let [validation,setValidation] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    let found = users.find((item) => item.username === user.username && item.password === user.password);
    if (found === undefined) {
      found = false
      setValidation("wrong username or password")
    }
    else{
      found = true
      setValidation("")
      setIsLogged(found)
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} placeholder="username" type="text" required />
        <input name="password" onChange={handleChange} placeholder="password" type="password" required />
        <button type="submit">Login</button>
      </form>
        {validation && <span style={{color:'red'}}>{validation}</span>}
    </div>
  );
};

export default Login;
