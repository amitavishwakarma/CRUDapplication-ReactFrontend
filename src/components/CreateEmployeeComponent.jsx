import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import EmployeeService from '../services/EmployeeService';



function CreateEmployeeComponent(props) {

  const [formData, setFormData] = useState({
    username: "",
    emailId:"",
    contactNo: ""
  });

  const navigate = useNavigate();

  

  const saveEmployee=(e)=>{
         e.preventDefault();
    
         let employee={username:formData.username,emailId: formData.emailId,contactNo: formData.contactNo}
         console.log(employee);
    
         EmployeeService.createEmployee(employee).then (res => {
           navigate("/employee");
          
         })
     }

  return (
    <div>
         <form>
         <div class="form-group">
     <label for="exampleInputEmail1">User Name</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})}></input>
     <small id="emailHelp" class="form-text text-muted"></small>
   </div>
   <div class="form-group">
     <label for="exampleInputEmail1">Email address</label>
     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formData.emailId} onChange={(e)=>setFormData({...formData,emailId:e.target.value})}></input>
     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div class="form-group">
     <label for="exampleInputPassword1">Contact</label>
     <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Number" value={formData.contactNo} onChange={(e)=>setFormData({...formData,contactNo:e.target.value})} ></input>
   </div>
   <div class="form-check">
     <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
     <label class="form-check-label" for="exampleCheck1">Not a Robot</label>
   </div>
   <button type="submit" className="btn btn-primary" onClick={saveEmployee}>Submit</button>
   <button  className="btn btn-danger">Cancel</button>
 </form>
       </div>
  );
}

export default CreateEmployeeComponent;





// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService';
// import { useNavigate } from "react-router-dom";

// export default class CreateEmployeeComponent extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//      username:'',
//      emailId:'',
//      contactNo:''
//   }
//   this.userNameChangeHandler=this.userNameChangeHandler.bind(this);
//   this.emailIdChangeHandler=this.emailIdChangeHandler.bind(this);
//   this.contactNoChangeHandler=this.contactNoChangeHandler.bind(this);
//   this.saveEmployee=this.saveEmployee.bind(this);
// }

// saveEmployee=(e)=>{
//     e.preventDefault();

//     let employee={username:this.state.username,emailId: this.state.emailId,contactNo: this.state.contactNo}
//     console.log(employee);

//     EmployeeService.createEmployee(employee).then (res => {
//       history.pushState("/employee");
      
//     })
// }




// userNameChangeHandler =(event)=> {
//     this.setState({username: event.target.value});
// } 

// emailIdChangeHandler =(event)=> {
//     this.setState({emailId: event.target.value});
// } 

// contactNoChangeHandler =(event)=> {
//     this.setState({contactNo: event.target.value});
// } 
   


//   render() {
//     return (
//       <div>
//         <form>
//         <div class="form-group">
//     <label for="exampleInputEmail1">User Name</label>
//     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={this.state.username} onChange={this.userNameChangeHandler}></input>
//     <small id="emailHelp" class="form-text text-muted"></small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.emailId} onChange={this.emailIdChangeHandler}></input>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Contact</label>
//     <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Number" value={this.state.contactNo} onChange={this.contactNoChangeHandler} ></input>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
//     <label class="form-check-label" for="exampleCheck1">Not a Robot</label>
//   </div>
//   <button type="submit" className="btn btn-primary" onClick={this.saveEmployee}>Submit</button>
//   <button  className="btn btn-danger">Cancel</button>
// </form>
//       </div>
//     )
//   }
// }
