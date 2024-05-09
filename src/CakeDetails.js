import { useParams, useSearchParams,useNavigate } from "react-router-dom"
import { Flex, Image, Layout, Row, Button} from "antd"
import { cakes } from "./cakeData"
import axios from "axios";
import { useState,useEffect } from "react";
//import CakeImage from "./CakeImage"
function CakeDetails()
{
    
    // var cakeid=useParams()
    // cakeid=Number.parseInt(cakeid.cakeid)
    // var cake=cakes.filter((each)=>
    // {
    //     return cakeid==each.id
    // })[0]
    // console.log(cakeid)
    // console.log(data)
    var [url]=useSearchParams();
    var name=url.get('name')
    var price=url.get('price')
    var cakeid=url.get('cakeid')
    var image=url.get('image')
    //var param = useParams();
    //var cakeid = param.cakeid;
    var navigator = useNavigate();
    var [cake, setCake] = useState({});

    useEffect(() => {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cake/"+cakeid,
            method: "get"
        }).then(
            (response) => {
                setCake(response.data.data);
            }, (error) => {
                console.log("no cake data found", error)
            }
        )
    },[])
    function handleAdd(){
        if(!localStorage.token){
            alert("you are not logged in!")
            navigator('/login')
        }
        var cakedata = {
            name:cake.name,
            cakeid:cake.cakeid,
            image:cake.image,
            price:cake.price,
            weight:3,
        }
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
            method:"post",
            data:cakedata,
            headers:{
                Authorization:localStorage.getItem('token')// that token which u got while logiing in
                //Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRoYXJhbmlyYW9nYW5uYW1hbmVuaUBnbWFpbC5jb20iLCJpYXQiOjE3MTQ5NzYxODB9.s90LFrMD99C2Kvr2FgWtw6jsK2BcemGvmBYaMfAjtwg"
            }
        })
        alert("item added to cart")
    }

    
    // console.log(cakeid)
    // console.log(cake)
    
    return(<>
    {/* {name+price+cakeid} */}
    
        <Row align="horizontal">
            <Image width={200}  height={350} src={image}></Image>
            
            <ol>
                <label><h3>Name:  {name}</h3></label>
                 <label><h3>Price:  {price}</h3> </label>
                <Button onClick={handleAdd}>Add to Cart</Button>
                
            </ol>
             
            
        </Row>
       
        {/* <Flex>
            <Layout>
                 <Content style={contentStyle}><Image width={500}  height={450} src={cake.image}></Image></Content>
            </Layout>
        </Flex> */}
   
    </>
        
    )
}
export default CakeDetails