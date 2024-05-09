import { Button } from "antd";
import React from "react";

function Forgot(){
     var new_pass
     var conf_pass

     function handleNewpass(e){
        new_pass=e.target.value

     }

     function handleConf(e){
        conf_pass=e.target.value
     }
     function handleButt(){
        if(new_pass === conf_pass) {
            alert("password changed")
        }
        else{
            alert("password doesnot match")
        }
     }
     
    return(
            <>
             <input type='password'placeholder="enter new password" onChange={handleNewpass}></input>
             <input placeholder="re-enter the password" onChange={handleConf}></input>
             <Button onClick={handleButt}>Submit</Button>
            </>
        );
     
}

export default Forgot;