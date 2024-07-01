import axios from "axios";


const  URL = " http://localhost:1010/getanimal ";
class EmployeeService
{
    getEmployees()
    {
        return axios.get(URL);
    }
    createEmployee(employee)
    {
        return axios.post("http://localhost:1010/ui",employee);
    }
    getEmployee(id){
        return axios.get(`${URL}/${id}`);
    }
    updateEmployee(employee){
        return axios.put("http://localhost:1010/put",employee);
    }
    deleteEmployee(id){
        console.log("here");
        return axios.delete(`http://localhost:1010/delete/${id}`);
    }
}
export default new EmployeeService()