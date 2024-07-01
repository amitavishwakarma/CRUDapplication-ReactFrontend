import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import EmployeeService from '../services/EmployeeService';



function UpdateEmployeeComponent(props) {

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id:"",
        username: "",
        emailId:"",
        contactNo: ""
      });

      useEffect(() => {
        setFormData({...formData,id:data.id,username:data.username,emailId:data.emailId,contactNo:data.contactNo});
      }, []);

      const saveEmployee=(e)=>{
        e.preventDefault();
   
        let employee={id:formData.id,username:formData.username,emailId: formData.emailId,contactNo: formData.contactNo}
        console.log("request employee "+employee.username);
   
        EmployeeService.updateEmployee(employee).then (res => {
        getToListEmployeePage();
         
        })
    }
    function getToListEmployeePage(){
        navigate("/employee");
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
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Number" value={formData.contactNo} onChange={(e)=>setFormData({...formData,contactNo:e.target.value})}></input>
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

export default UpdateEmployeeComponent;