import employeeDb from "./EmployeeDB"
class Employee{
    constructor(data){
        this.id = data.id;
        this.name=data.name;
        this.rank = data.rank;
    }

    dbRequest=()=>{
        employeeDb().dbInfo(this);
    }
}


export default Employee;