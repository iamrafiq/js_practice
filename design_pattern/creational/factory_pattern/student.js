import Person from "./person"
 
class Student extends Person{
    constructor(data){
        super({"name":data.name, "nid":data.nid});
        this.year = data.year;
        this.course = data.course;
    }

    toString = ()=>{
        return JSON.stringify(this);
    }
}

export default Student;