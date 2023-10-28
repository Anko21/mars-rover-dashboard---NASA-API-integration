import React, {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {useVisitorContext} from "./userContext"

function Intro() {
    const navigate = useNavigate();
    const {user,handleChange} = useVisitorContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }

  return (
    <div className='loginPage'>
            <form className='loginUser' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder='username'
                    value={user.name}
                    onChange={handleChange}/>
                    <input
                    type="email"
                    name='email'
                    placeholder= "username@mail.com"
                    value={user.email}
                    onChange={handleChange}
                />
                <button className='btn'>Login</button>
            </form>
    </div>
  )
}

export default Intro;