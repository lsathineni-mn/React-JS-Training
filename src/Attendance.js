import React from "react";
import {useState} from "react";
import {Button} from 'antd';
import Datatable from "./Datatable";

function Attendance(){
    var user = {}
    var [name,addname] = useState([{
        name : "Laxma"
    }])
    function handleName(event){
        //temp=event.target.value
        user.name=event.target.value
        //console.log(name)
    }
    function mark(){
        name.push(user)
        name = [...name]
        addname(name)
        //console.log(name)
        Datatable(name)

    }
    return(
        <>
        <input placeholder="enter name" onChange={handleName}></input>
        <Button onClick={mark}>Mark</Button>
        
        </>
    )
    }
export default Attendance;