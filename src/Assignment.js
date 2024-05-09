import React from "react";
import { Button,Card,Row} from "antd";
import Cake from "./cake";
import { cakelist } from "./cakeData";
import { useNavigate } from "react-router-dom";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function Assignment(){
   var Navigate = new useNavigate();
   
    return(
        <>
        <Row>
        {cakelist.map((each)=>{
            return(<Cake data={each}/>)
        })}
        </Row>
        </>
    );
}

export default Assignment;