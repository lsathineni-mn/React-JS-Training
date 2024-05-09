//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login'
import Navigator from './navigation'
import Cake from './cake';
import Forgot from './Forgot.js';
import Cakelist from './cakelist';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import NewUser from './ewUser.js';
import Devolist from "./Devolist.js";
import Datatable from "./Datatable";
import { Row } from 'antd';
import Attendance from './Attendance';
import SignUp from './SignUp';
import NewUser from './CreateAcc.js';
import Userdetails from './Userdetails.js';
import Cart from './Cart.js';
//import { Button } from 'antd';
import { users } from './data.js';
import Admin from './Admin.js';
import Assignment from './Assignment.js';
import CakeDetails from './CakeDetails.js';
import Signup1 from './Signup1.js';
import Search from './Search.js';
import A from './A.js';
import Login1 from './Login1.js';

function App() {
  var name ="laxma reddy"
  var data1 = {
    name : "birthday",
    price : 500,
    image : "bday.jpg"
  }

  var data2 = {
    name : "strawberry",
    price : 600,
    image : "birthday.jpg"
  }
  var data3 = {
    name : "velvet",
    price : 1600,
    image : "heart.jpg"
  }
  var data4 = {
    name : "kota badam cake",
    price : 4000,
    image : "bb.jpeg"
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navigator />  {/*this remains in all the screens*/ }
      <Routes>
        <Route path='/Login' element={<><Login /></>}></Route>
        <Route path='/' element={<><Login /></>}></Route>
        <Route path='cakelist' element={<><Cakelist /></>}></Route>
        <Route path='devolist' element={<><Devolist /></>}></Route>
        <Route path='/NewUser' element={<> <SignUp /></>}></Route>
        <Route path='/assignment' element={<Assignment />} ></Route>
        <Route path='/forgot' element={<><Forgot /></>}></Route>
        <Route path='/edit/:userId' element={<><Userdetails /></>}></Route>
        <Route path='/order/:name' element={<><CakeDetails /></>}></Route>
        <Route path ='/admin' element={<><Admin /></>} ></Route>
        <Route path='/register' element={<Signup1 />}></Route>
        <Route path='/search' element={<><Search /></>}></Route>
        <Route path='/cakedetails/' element={<><CakeDetails /></>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        
        
        
        
       </Routes>
      </BrowserRouter>
     
      
      
      
      
      
      
    

      
      
    </div>
    
  );
}

export default App;
