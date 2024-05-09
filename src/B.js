import React from "react";
import { useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import C from './C.js';

function B(props){
   return(<><C money={props.money} /></>);
}

export default B;