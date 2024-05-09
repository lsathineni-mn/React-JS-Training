import { Badge, Button, Card, Image } from "antd";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
function Cake(props){
    var tag
    if(props.data.tag){
        tag = <p>{props.data.tag}</p>
    }
    else{
        tag = null
    }
    
    var navigator=useNavigate()

    function cakeDetails()
    {
        //console.log(props.key)
        var url='/cakedetails?cakeid='+props.data.cakeid+'&name='+props.data.name+'&price='+props.data.price+'&image='+props.data.image;
        navigator(url)
    }
    
    return (
        <Card style={{ width: 300, marginLeft: 40 }} onClick={cakeDetails}>
        <Link to={"/details/"+props.data.cakeid}><Image preview={false} height={200} src={props.data.image} width={250} ></Image></Link>
        <p>{props.data.name}</p>
        <p>{props.data.price}</p>
        {props.data.tag && <p>{props.data.tag}</p>}
      
    </Card>
    )
}
export default Cake