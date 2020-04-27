import Course from "./courses.json"
import Finder from "./finder"



const chainOfResponsibility = (()=>{
    const execute = (()=>{
        const udemyCourseFinder = new Finder("Finder Udemy Course", Course.language);
        let searchQuery = `English`;
        const result = udemyCourseFinder.find(searchQuery);
        console.log(result);
    })();
    return{
        execute:execute
    }
})();

export {chainOfResponsibility as chainOfResponsibilityPattern}