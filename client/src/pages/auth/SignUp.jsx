import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { useAuth } from "../../hooks/auth";
import Auth from "./Auth";

const SignUp = () => {
  const { signUp } = useAuth();
  const history = useHistory();
  const [Submitted, setSubmitted] = useState(false);
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  if (isAuth()) return <Redirect to='/' />;
  const inputChangeController = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const res = await signUp(User);
    if (res) {
      history.push("/");
    }
  };

  return (
    <Auth type='signup'>
      <form onSubmit={formSubmitHandler}>
        <div className='flex center form-title'>
          <span>Sign Up to ShareSheet</span>
        </div>
        <label>Name</label>
        <input type='text' name='name' onChange={inputChangeController} />
        <label>Email</label>
        <input type='email' name='email' onChange={inputChangeController} />
        <label>Password</label>
        <div className='password-container'>
          <input
            type='password'
            name='password'
            onChange={inputChangeController}
          />
        </div>
        <div className='auth-btn-container'>
          <button className="btn btn-primary" type='submit' disabled={Submitted}>
            Sign Up
          </button>
        </div>
      </form>
    </Auth>
  );
};

export default SignUp;
