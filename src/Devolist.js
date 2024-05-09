import { Alert,Card,Image } from "antd";
import React from "react";
import {Row} from 'antd';
function Devolist(){

    var dev = [{name :"laxma",role:"developer",location:"hyderabad"},
    {name:"kota",role:"baadam paal expert"},
    {name:"shiva",role:"support",salary:30}]

    var dev2 = [{name:"laxma",role:"devoloper"},
                {name:"kota", role:"badaam paal expert"}]

    return (
        <>
          <h1> All users</h1>
          <Row>
             {dev.map((each)=>{
              var keys = Object.keys(each)
              return(
                <Card style={{width:200}}>
                    <Image height={150} src="user.png"></Image>
                    {
                        keys.map((eachkey)=>{
                            return <p>{each[eachkey]}</p>
                        })
                    }
                </Card>

                
              )
            }

            )}
          </Row>
          </>
        )
        
}
export default Devolist;