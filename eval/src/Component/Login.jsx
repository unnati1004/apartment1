import axios from "axios";
import { useState,useNavigate } from "react";
export const Login=()=>{
        const [user,setUser]=useState({});
        const navigate = useNavigate();

        const handleSubmit =()=>{
            e.preventDefault();
            axios.get(`http://localhost:8080/manager/${user.email}`).then((res)=>{
                if(res.data.password == user.password){
                    alert("Login Successful");
                    navigate("/")
                }
                else{
                    alert("Password is incorrect");
                }
            }).catch((e)=>{
                alert('Email is not found')
            })
        }

        const handlevalue = (e)=>{
            let {id} = e.target;
            setUser({
                ...user,
                [id]:e.target.value
            })
        }

    return (
        <div>
            <form action="" id="login-form" onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <input type="text" placeholder="Email" onInput={handlevalue} id="email" required />
                <input type="password" placeholder="Password" onInput={handlevalue} id="password" required/>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
} 