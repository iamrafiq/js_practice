import {Course, CourseServices, CourseServiceFacede} from "./Course"

const myCourse = new Course({
    name:"JS Design Pattern",
    project: "Udemy App"
});



let execute =()=>{
    // before completing the course
    console.log(myCourse);

    //Bad practices is to use logic in main module
    // bellow lines contain logic for first completing the course 
    //then saving the course, so this is a problem the solution is the FacedePattern
    //wrraping up bellow lines into Course.js file
    /*CourseServices.complete(myCourse);//completing the course
    if(myCourse.completed){
        CourseServices.save(myCourse);// since course is completed saving it
    }*/

    // solution above problem
    CourseServiceFacede.completeMethod(myCourse);

    //after completing the course
    console.log(myCourse);
}

export {execute as FacedePattern}