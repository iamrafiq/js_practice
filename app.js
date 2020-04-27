import print from "./logger"
import Rect from "./Rect"
import _object from "./object_export";
import {funbar, add} from "./function-as-parameter"
import Rectangle from "./inheritance/rectangle";
import Square from "./inheritance/square";
import typeOfNumberVars from "./objects_in_js/box_unbox"
import {propertyOfObject, functionObject, functionObject1, functionObject2} from "./objects_in_js/object_properties"
import {employeCount, studentCount} from "./key_word/this_in_arrow_function"
import {scopeTesting} from "./key_word/var_vs_let"
import {functionObjectInstance} from "./objects_in_js/function_object_new_instance"
import {propertiesOfObject} from "./objects_in_js/propertis_in_object"
import {propsAndPrototype} from "./objects_in_js/properties_prototype_constructor"
import { prototypeMonkeyPatching } from "./objects_in_js/prototype";
// import { moduleExample } from "./modules_in_js/modules";
//import { arrayMapExample } from "./functions/higher_order_function/array_map";
//import { constructorPattern } from "./design_pattern/creational/module_pattern";
import Employee from "./design_pattern/creational/module_pattern/Employee";
import Course from "./design_pattern/structrul_pattern/decorator_pattern/Course";
import HotNew from "./design_pattern/structrul_pattern/decorator_pattern/HotNew";
import BestSeller from "./design_pattern/structrul_pattern/decorator_pattern/BestSeller";
import { compositPattern } from "./design_pattern/structrul_pattern/composit_pattern/CompositPattern";
import { FacedePattern } from "./design_pattern/structrul_pattern/facade_pattern/FacedePattern";
//import { flyWeightMemoryProblem } from "./design_pattern/behavioural/flyweight_pattern/problem_extensive_memory_use/MemoryProblem";
import { flyWeightPattern } from "./design_pattern/behavioural/flyweight_pattern/solution_flyweight_pattern/FlyWeightPattern";
import { strategyPattern } from "./design_pattern/behavioural/strategy_pattern/Strategypattern";
import { observerPattern } from "./design_pattern/behavioural/observer_pattern/ObserverPattern";
import { chainOfResponsibilityPattern } from "./design_pattern/behavioural/chain_of_responsibility_pattern/main";
//import {anonymousFunction} from "./functions/anonymousfunction"
//import { callBackExample } from "./functions/callback";
//import { reduceFunctionExamples } from "./functions/higher_order_function/array_reduce";
//import { arrayFilterFunctionExample } from "./functions/higher_order_function/array_filter";
//import userFactory from "./design_pattern/creational/factory_pattern/userFactory"
//import { singleTonPattern } from "./design_pattern/creational/singleton_pattern";
//chainOfResponsibilityPattern.execute();
var testVar = 6;
console.log(testVar);
testVar = "ijk9393";
console.log(testVar);
//observerPattern.execute();
//strategyPattern.execute();
//flyWeightPattern();
//flyWeightMemoryProblem()
//FacedePattern()
//compositPattern()
/*var course1 = new Course({"id":83739, "name":"Advance C++", "image":"cplus.png", "price":"83$"});
var hotNew1 = new HotNew(course1);
var bestSeller1 = new BestSeller(course1);

course1.toString(course1);
course1.toString(hotNew1);
course1.toString(bestSeller1);*/
//singleTonPattern();
/*const instructor = userFactory("instructor", {
    "name":"Suru Zaman",
    "nid":8373930,
    "department":"Science",
    "rank":"Head Scientist"
});
console.log(instructor.toString());

const student = userFactory("student", {
    "name":"Rafiq",
    "nid":9383,
    "year":"2018",
    "course":"msc"
});

console.log(student.toString());
*/


/*const employeeModule = new Employee({id:"9987", name:"Suru Zaman", rank:"CEO"});
employeeModule.dbRequest();*/
//constructorPattern();
//arrayMapExample();
//moduleExample();

//arrayFilterFunctionExample()
// const logger = require('./logger');
//global.console.log("App Start");
//reduceFunctionExamples();
//callBackExample();
//anonymousFunction();

//prototypeMonkeyPatching();
//propsAndPrototype();
//propertiesOfObject();
//functionObjectInstance();
//scopeTesting();

/*employeCount.call({count:100}).print();
studentCount.call({count:300}).print();*/

//global.console.log(module);

//print('ablkadklf');


// const rect = new Rect(5,6);
// rect.print(rect.area());

//  _object.setAnimalName("Tiger");
// console.log(_object.getAnimalName());
// let result = funbar(1, 2, add);
// console.log(result);

// const square = new Square(9,9);
// square._type="square";
// console.log("area of square is:"+square.getArea("square"));

//typeOfNumberVars();

/*propertyOfObject();
functionObject.doThings();
functionObject1.doThings();
functionObject2.doThings();

functionObject2.doThings("function overloading");

//var b = new functionObject();  //TypeError: functionObject is not a constructor
//b.doThings(); //TypeError: 
*/