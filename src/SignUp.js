import { Button, Input } from "antd";
import { useState } from "react";
import DataTable from "./Datatable";
import { useNavigate } from "react-router-dom";
import DisplayInTable from "./DisplayInTable";
import axios from "axios";
import Admin from "./Admin";

function Signup(){

     var person = {};
    var navigate = new useNavigate()
    function deleteUser(index){
        people.splice(index,1)
        setPeople([...people])
    }
    var [people,setPeople] = useState([]);
    function handleEmail(event){
        person.email = event.target.value;
    }
    function handlePassword(event){
        person.password = event.target.value;
    }
    function handleName(event){
        person.name = event.target.value;
    }
    function handleButtonClick(){
        people.push(person);
     people = [...people];
        setPeople(people);
    }    

    function editUsers(){
        
    }

    function CreateAccount(){

        //var user = {email : "simmon@gmail.com",password:"12345",name : "simmon"}
        console.log("User details",people)
        
        axios({
            url : "http://apibyauw.eu-4.evennode.com/api" + "/register",
            method : "post",
            data : people
        
        }).then((response)=>{
            console.log("response from register api",response)
        },(error)=>{
            console.log("Error from register api is ",error)
        })
        
        }
    

    return (
        <>
            <h1>Create an Account</h1>
            <Input placeholder="Name" onChange={handleName}></Input>
            <Input placeholder="Email" onChange={handleEmail}></Input>
            <Input type="password" placeholder="Password" onChange={handlePassword}></Input>
            <Button type="primary" onClick={handleButtonClick}>Create</Button>
            <Button type="primary" onClick={CreateAccount}>API</Button>
            
            {/*<DisplayInTable  data={people} editUsers={editUsers}  deleteUser={deleteUser}/>*/}
            <Admin data = {people} />
        </>
    )
}

export default Signup;