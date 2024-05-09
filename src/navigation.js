import React from "react";
import {Link, Navigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {Button, Menu,Input} from "antd";

function Navigation(){
    //var search
    var search
    var navigator=useNavigate()
    function search()
    {
        
        navigator('/search?name='+search)
    }
    function handleCart(){
        navigator('/cart')
    }
    function handleSearchEvent(event)
    {
        search=event.target.value
    }
    const items=[
        {label:<Link to='/cakelist'>Home</Link>},
        {label:'Contact Us'},
        {label:'About'},
        {label:'Cake'},
        {label:<Link to='/Login'>
        <Button type="primary">Login</Button></Link>},
        {label:<input type="search" placeholder="search" onChange={handleSearchEvent}></input>},
        //{/*lable : <Button onClick={}>Cart</Button>*/}
        {label:<Button type='primary' onClick={search}>Search</Button>},
        {label : <Button type='primary' onClick={handleCart}>Cart</Button>}
        
    ]
    return(
        <Menu mode="horizontal" items={items}/>
    )
}

export default Navigation;