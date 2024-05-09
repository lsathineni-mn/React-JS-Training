import DisplayInTable from "./DisplayInTable";
import { users } from "./data";
import { useNavigate } from "react-router-dom";

function Admin(props){
    var navigator = useNavigate()
    function editUser(index){
        navigator('/edit/'+(index+1))
    }


    
    return (
        <>
        <DisplayInTable data={props.data} editUser={editUser}  />
        </>
    )
}
export default Admin;