import {Button, Table} from "antd";
import React from "react";
function Datatable(props){
   var userlist = [{name : "laxma", phone : "123456789"},
    {name : "kota", phone:"987654321"},
    {name:"akash",role:"badangpet badcow", status:"cheap"},
    {name:"shiva",role:"support",pani:"no work",hobby:"asking for team lunch"}
   ]
   //var keys = Object.keys(userlist[0])

   //storing unique keys of arrays of objects
   var myset = new Set();
   props.data.map((each)=>{
      var x = Object.keys(each)
      x.map((data)=>{
        myset.add(data)
       // myset.add(x)
      })
   })
   var columns = [...myset]
   var columns = columns.map((each)=>
    {
        return {
            title:each.toUpperCase(),
            dataIndex:each,
            key:each,
            //defaultSortOrder: 'descend',
            //sorter: (a, b) => a.name - b.name,
        }
    }
)
columns.push({
    title : "Action",
    render : (text,record,index)=>{
        return <Button onClick={props.deleteUser.bind(null,index)}>Delete</Button>
    },
    key:"action"
})

columns.push({
    title : "Action",
    render : (text,record,index)=>{
        return <Button onClick={props.editUser.bind(null,index)}>Edit</Button>
    },
    key:"action edit"
})
return (
   <Table dataSource={props.data} columns={columns} />
);
}

export default Datatable;