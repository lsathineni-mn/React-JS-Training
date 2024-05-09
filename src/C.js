import React from "react";
import { useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import D from './D.js';

function C(props){
   return(<><D money={props.money} /></>)
}

export default C;