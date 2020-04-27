import Instructor from "./instructor"
import Student from "./student"

const userFactory = (type, userData)=>{
    if(type === "instructor"){
        let instructor = new Instructor(userData);
        return instructor;
       // instructor.toString();
    }

    if(type === "student"){
        let student = new Student(userData);
        return student;
    }
}

export default userFactory;