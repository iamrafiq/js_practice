let Singleton = (()=>{
    let course;
    var assignCourse=()=>{
        const course = new Object();
        return course;
    }

    return{
        getInstance : ()=>{
            if (!course){
                course = assignCourse();
            }
            return course;
        }
    }
  
})();

function execute(){
    const state1 = Singleton.getInstance();
    const state2 = Singleton.getInstance();

    if(state1 == state2){
        console.log("The couse is bought already got to course");
    }
}

export {execute as singleTonPattern}