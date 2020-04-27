import Course from "./../Course"
import {flyWeightMemoryProblem} from "./../problem_extensive_memory_use/MemoryProblem"

const users = ["Alex", "Paul", "Jhon", "Nora",];
const completed = [true, false];

const CourseMethod = function(){
    const courses = {};
    let count = 0;
    const add = (data)=>{
        courses[data.title] = new Course(data);
        count++;
    }

    const get = (title) =>{
        return courses[title];
    }

    const getCount = ()=>{
        return count;
    }
    return{
        add:add,
        get:get,
        getCount:getCount
    }
}

var execute = ()=>{
    flyWeightMemoryProblem();
    const courses = new CourseMethod;
    const numCourse = 1000000;
    const initialMemory = process.memoryUsage().heapUsed;
    
    for (let i=0; i < numCourse; i++){
    
        courses.add({
            title: `${i}.course`,
            user: users[Math.floor(Math.random()*4)],
            completed: completed[Math.floor(Math.random()*2)],
    
        });
    }
    
    const finalMemory = process.memoryUsage().heapUsed;
    
    const usedMemory = finalMemory-initialMemory;//in byte
    var mbUsed = (usedMemory / 1024) / 1024; // byte/1024 = KB, kb/1024 = MB
    mbUsed = Math.round(mbUsed * 100) / 100;
    console.log("With flyweight pattern: "+mbUsed + "MB used");
}

export {execute as flyWeightPattern}