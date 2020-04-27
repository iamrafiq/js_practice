/*The JavaScript call() Method
The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.This example calls the fullName method of person, using it on person1:

var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person);  // Will return "John Doe" 
*/

//https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable

function employeCount(){
    console.log("employe number: "+ this.count);
    return{
        count:55,
        print: function(){
            console.log(this.count);
        }
    }
}
//var count=1000;
 function studentCount(){
    console.log("student count:"+this.count)
    return{
        count:22,
        print:()=>{
            console.log("student count:"+this.count)
        }
    }
}

export{employeCount, studentCount}