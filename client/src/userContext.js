//This should be used if you want to add a Contex API for example for the user
import { createContext, useContext,useState } from "react";
import { useEffect } from "react";


const UserContext = createContext(undefined)

const UserProvider = ({children})=>{
    const visitor={
        name : '',
        email : '',
    }
    const [user,setUser] = useState(() => JSON.parse(localStorage.getItem("User")) || "")

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        localStorage.setItem('User',JSON.stringify(user))
    },[user])

    return(
        <UserContext.Provider value={{user,handleChange}}>
            {children}
        </UserContext.Provider>
    )

}

export const useVisitorContext=()=>useContext(UserContext);

export default UserProvider;



//Index.js should be

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Intro from './Intro';
// import {BrowserRouter} from "react-router-dom";
// import App from './App'
// import UserProvider from './userContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <UserProvider>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//   </UserProvider>
// );
