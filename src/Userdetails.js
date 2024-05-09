import { useParams } from "react-router-dom"
import { users } from "./data"
function UserDetails()
{
    var user=useParams()
    var userid=Number.parseInt(user.userid)
    var data=users.filter((each)=>
    {
        return each.id==userid
    })[0]
    var keys=Object.keys(data)
    return(
        <>
            {keys.map((key)=>
            {
                // {console.log(key)
                //     console.log(data[key])
                // }
                return(
                     <h3> {key}: {data[key]}
                </h3>
                )
               
            })}
        </>
    )
    
    
    
    
    
          
    }
export default UserDetails