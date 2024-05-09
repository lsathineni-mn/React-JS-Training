import { Alert } from "antd"


function Userlist(){

    var allusers=["laxma","s"]
    if (allusers.length==0){
        return(
        <Alert message="No results found" type="warning" />
        )
    }
    else{
    return(
        <div>
        {allusers.map((each)=>{
            return (
                <Alert message={each} type="success" />
            )
        })}
        
        <h1>All Users</h1>
        </div>
    )
}
}

export default Userlist