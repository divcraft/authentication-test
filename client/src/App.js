import React from 'react';
import { useFormik } from 'formik';
import './App.css';


function App() {
  const registerForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log('register form:', values)
    }
  })
  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log('login form:', values)
    }
  })
  // const getUserForm = useFormik({
  //   initialValues: {
  //     username: '',
  //     password: '',
  //   },
  //   onSubmit: values => {
  //     console.log('get user form:', values)
  //   }
  // })
  return (
    <div className="forms">
      <div className="register-form">
        <h1>Register form</h1>
        <form onSubmit={registerForm.handleSubmit}>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='username'
            value={registerForm.values.username}
            onChange={registerForm.handleChange}
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="login-form">
        <h1>Login form</h1>
        <form onSubmit={loginForm.handleSubmit}>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='username'
            value={loginForm.values.username}
            onChange={loginForm.handleChange}
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      {/* <div className="get-user-form">
        <h1>Get user form</h1>
      </div> */}
    </div>
  )
}

export default App;
