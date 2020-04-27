var Course = function(title, author){
        this.title=title;
        this.author = author;

        this.toString=function(){
            return `Name Of Book is ${this.title} and title is ${this.title}`;
        }
}

var physics = new Course("Mordern physics", "N. Zaman");
var math = new Course("Algebra", "S. Zaman");
//using prototype to add new property and method after declearing the constructor
Course.prototype.totalMark=100;
Course.prototype.getMark=function(){
    return `Total Mark of ${this.title} is ${this.totalMark}`
}
Course.prototype.setMark=function(mark){
    this.totalMark=mark;
}
function oldSyntex(){
    console.log(physics.toString());
    console.log(math.toString());
    console.log(physics.getMark());
    console.log(math.getMark());

    var englishSecondPaper = new Course("English Second Paper", "N Zaman");
    englishSecondPaper.setMark(50);
    console.log(englishSecondPaper.toString());
    console.log(englishSecondPaper.getMark());
    console.log(Course.prototype);
    
}

//ES6 
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = ()=>{
        return `Full name is: ${this.firstName} ${this.lastName}`
    }
}

var person1 = new Person("Suru", "Zaman");
var person2 = new Person("Nora", "Zaman");

var newSytex=()=>{
    console.log(person1.getFullName());
    console.log(person2.getFullName());
    Person.prototype.age=0;
    Person.prototype.setAge= (age)=>{
        this.age=age;
    }
    Person.prototype.getAge=()=>{
        return this.age;
    }
 
    person1.setAge(3);
    person2.setAge(4);
    console.log(`${person1.getFullName()} age ${person1.getAge()}`);
    console.log(`${person2.getFullName()} age ${person2.getAge()}`);
    console.log(Person.prototype);

}
var execute=()=>{
    oldSyntex();
    newSytex();
}
export {execute as constructorPattern}