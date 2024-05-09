import { Button } from "antd";
import React from "react";
//import {Button} from 'antd';
function NewUser(){
   var email;
   var pass;
   var conf_pass;
   function handleNewpass(e){
    pass=e.target.value

 }

 function handleConf(e){
    conf_pass=e.target.value
 }
 function handleEmail(e){
    email=e.target.value
 }

 function handleButt(){
    if(pass === conf_pass){
        alert("new user created")
    }
    else{
        alert("password doesnot match")
    }
 }

 return (
    <>
      <input type='email' placeholder="email id" onChange={handleEmail}></input>
      <input type='password' placeholder="enter password" onChange={handleNewpass}></input>
      <input placeholder="re-enter password" onChange={handleConf}></input>
      <Button onClick={handleButt}>Submit</Button>
    </>
 );

}

export default NewUser;