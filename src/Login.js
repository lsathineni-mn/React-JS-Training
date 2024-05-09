import { Alert, Button, Input } from 'antd';
import React, { useState } from 'react';
//import MarkAttendance from './MarkAttendance'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login() {
    var navigate = useNavigate();
    var [error,setError] = useState(null);
    var email,password;
    var user = {}
    
    
    
        
        if(localStorage.getItem('token')!=undefined){
            return(<>
              <h2>You are already signed in</h2>
              <Button  type='primary' onClick={Logout}>Log Out</Button>
            </>);}
        //console.log(email, password);
        function logon(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:user
        }).then((response)=> {
            console.log("Response from register api", response)
            localStorage.setItem('token',response.data.token)
            console.log(localStorage.token)
            if(response.data.token==undefined){
                alert("invalid user")
                navigate("/login")
            }
            else{
            //localStorage.setItem('token',"laxma")
            navigate("/cakelist")}
        },(error)=>{
            console.log("Error from register api is", error)
        })
    }
    function getEmail(event) {
        user.email=event.target.value;
    }
    function getPassword(event) {
        user.password=event.target.value;
    }
    function Logout(){
        localStorage.setItem('token',null)
        localStorage.removeItem('token')
        console.log("logging out")
        console.log(localStorage.getItem('token'))
        alert("succesfully logged out")
        navigate('/cakelist')
    }
    return (
        <div>
            {error && <Alert type="danger" message={error}/>}
            <h1>Login</h1>
            <label>Email:</label>
            <Input id='input-field' placeholder='Enter Email' onChange={getEmail}></Input>
            <label>Password:</label>
            <Input id='input-field' placeholder='Enter Password' onChange={getPassword}></Input>
            <Button type='primary' onClick={logon}>Login</Button>
            <Link to='/register'>New User</Link>
            
        </div>
    )
}
export default Login