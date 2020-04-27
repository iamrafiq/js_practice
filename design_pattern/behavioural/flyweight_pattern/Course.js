import {FlyWeight, FlyWeightFactory} from "./solution_flyweight_pattern/FlyWeight"
class Course{
    constructor(data){
        this.title = data.title;
        this.flyWeight = FlyWeightFactory.get(data.user, data.completed);
    }
}

export default Course;