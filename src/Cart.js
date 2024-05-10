import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card,Image,Row } from "antd";
 function Cart() {


  var [cakes, setCakes] = useState([]);
  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cakecart",
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"), 
      },
    }).then((response) => {
      setCakes(response.data.data)});
  }, []);

  if(localStorage.getItem('token')==undefined){
    navigate("/login")
    return(<><h2>please login</h2></>);
  }

  return (
    <div>
      {cakes.map((cake) => {
        return (
          <Row>
          <Card style={{ width: 300, marginLeft: 40 }}>
            <Image preview={false} height={200} src={cake.image} width={250} ></Image>
            <p>Name: {cake.name}</p>
            <p>Price: {cake.price}</p>
    
            <p>Weight: {cake.weight}</p>
            {/*<Button type='primary' onClick={deleteItems}>Delete</Button>*/}
          </Card>
          </Row>
        );
      })}
    </div>
  );
}

export default Cart;
