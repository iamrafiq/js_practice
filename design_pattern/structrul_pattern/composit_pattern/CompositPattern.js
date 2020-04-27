import Course from "./Course"
import CourseGroup from "./CourseGroup"
const js_course = new Course("Js Course", 15);
const bootstrap_course = new Course ("Bootstrap", 10);

const photoshop_course = new Course("Photoshop", 10);
const sketch_course = new Course("Sketch", 10);


const design_courses = new CourseGroup("Desing Courses", [photoshop_course, sketch_course]);
const web_courses = new CourseGroup("Web Courses", [js_course, bootstrap_course]);

const main_node = new CourseGroup("All Courses", [design_courses, web_courses]);


let main = ()=>{
    js_course.print();
    console.log(js_course.total());

    design_courses.print();
    console.log(`Total price $${design_courses.total()}`);

    web_courses.print();
    console.log(`Total price $${web_courses.total()}`);

    main_node.print();
    console.log(`Total price $${main_node.total()}`);

}

export {main as compositPattern}