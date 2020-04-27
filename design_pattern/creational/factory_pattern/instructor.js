import Person from "./person"
class Instuctor extends Person{
    constructor(data){
        super({"name":data.name, "nid":data.nid});
        this.department = data.department;
        this.salary=data.salary;
        this.rank=data.rank;
    }

    toString=()=>{
        return JSON.stringify(this);
    }
}
export default Instuctor;