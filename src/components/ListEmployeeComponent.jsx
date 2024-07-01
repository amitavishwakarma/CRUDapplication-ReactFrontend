import React, { Component, useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate } from 'react-router';



function ListEmployeeComponent(props) {
  const [employees,setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((res) =>{
      setEmployees(res.data);
  });
  }, []);

  function editEmployee(employee,id){
    console.log(employee);
    navigate(`/update-employee/${id}`,{ state: {id:id, username: employee.username,emailId:employee.emailId,contactNo:employee.contactNo }});
  }

  function deleteEmployee(id){
    EmployeeService.deleteEmployee(id).then((res)=>{
      EmployeeService.getEmployees().then((res) =>{
        setEmployees(res.data);
    });
    })
  }

  return (
    <div>
    <table className="table table-striped table-dark">
<thead>
<tr>
  <th scope="col">ID</th>
  <th scope="col">USERNAME</th>
  <th scope="col">EMAILID</th>
  <th scope="col">CONTACT</th>
  <th scope="col">ACTION</th>
</tr>
</thead>
<tbody>
   {
    employees.map((employee) =>
    <tr key =  {employee.id}>
        <td> {employee.id }</td>
        <td> {employee.username}</td>
        <td> {employee.emailId}</td>
        <td> {employee.contactNo}</td>
        <td><button onClick={()=>editEmployee(employee,employee.id)} className='btn btn-info'>UPDATE</button></td>
        <td><button onClick={()=>deleteEmployee(employee.id)} className='btn btn-danger'>DELETE</button></td>
    </tr>
     )
   }
</tbody>
</table>
  </div>
  );
}

export default ListEmployeeComponent;

// export default class ListEmployeeComponent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         employees: []
//       }
//     }

//     componentDidMount()
//     {
//         EmployeeService.getEmployees().then((res) =>{
//             this.setState({employees: res.data});
//             console.log(this.state.employees);
//         });
        
//     }
//     editEmployee(id){
//       console.log(id);
//     }

    


//   render() {
//     return (
//       <div>
//         <table className="table table-striped table-dark">
//   <thead>
//     <tr>
//       <th scope="col">ID</th>
//       <th scope="col">USERNAME</th>
//       <th scope="col">EMAILID</th>
//       <th scope="col">CONTACT</th>
//       <th scope="col">ACTION</th>
//     </tr>
//   </thead>
//   <tbody>
//        {
//         this.state.employees.map((employee) =>
//         <tr key =  {employee.id}>
//             <td> {employee.id }</td>
//             <td> {employee.username}</td>
//             <td> {employee.emailId}</td>
//             <td> {employee.contactNo}</td>
//             <td><button onClick={()=>this.editEmployee(employee.id)} className='btn btn-info'>UPDATE</button></td>
//         </tr>
//          )
//        }
//    </tbody>
// </table>
//       </div>
//     )
//   }
// }
