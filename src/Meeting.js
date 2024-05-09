import React from "react";
import {Button} from 'antd';
import { useState } from "react";
function Meeting(){
    //var count = 0;
    const [count, setCount] = useState(0);
    function click(){
        setCount(count+1)
    }
    return (
        <>
        <Button onClick={click}>Join Meeting</Button>
        <h2>{count}</h2>
        </>
    );
}

export default Meeting;