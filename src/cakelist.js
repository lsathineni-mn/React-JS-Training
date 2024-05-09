import { Row } from "antd"
import Cake from "./cake"
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
function Cakelist()
{
    var [cakes,setCakes] = useState()
    var navigate = useNavigate()
     if(localStorage.getItem('token') == undefined){

        navigate('/login');
        //return (<><h2>please login</h2></>);
     }
      
   
    useEffect(()=>{
        getCakelist()
    },[])
      function getCakelist(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/allcakes",
            method:"get"
        }).then((response)=>{
            console.log("response coming from all cakes api" , response.data.data)
            setCakes(response.data.data)  // updating the state
        }, (error)=>{
            console.log("Error from all cakes api", error)
        })
    }
    if(!cakes){
        return <Loader />
    }
 
return(
    <>
   <Row>
                {
                    cakes?.map((each,index)=>{
                        return <Cake data={each} key={index} />
                    })
                }
            </Row>
    </>
       
   
    
)
    
}
export default Cakelist