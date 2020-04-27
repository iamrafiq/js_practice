//Prototype patterns opens the door of inheritance, in Object Oriented programming
//a child class get access of it's base class public member function, 
//in javascript prototype macanisim we can asign a member to a constructor 
// or a class 
//by using prototype only single copy of that member will be shared between all objects

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName

    this.getFullName = function(){
        return `Full Name Is: ${this.firstName} ${this.lastName}`;
    }
}
//in bellow two object this.getFullName function is created
//but we can avoid this redundency by using prototyping
//means that we will assing this function to Person parents class
//In this example there is no parent/base class for Person but 
//in javascript Object is the parent class for all object
let person1= new Person("Nora", "Zaman");
let person2= new Person("Suru", "Zaman");

//Using prototype pattern 

function Course(author, title){
    this.author = author;
    this.title = title;
}

Course.prototype.getCourseInfo()=()=>{
    return `Author ${this.author} title is ${this.title}`
}

let math = new Course("Suru Zaman","Applied Math");
console.log(math.getCourseInfo());

let physics = new Course("Nora Zaman", "Applied Physics");
console.log(physics.getCourseInfo());