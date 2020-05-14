//in javascript object can be created in the bellow ways
var objectOne = {};
var objectTwo = new Object();

// poperty can be assinge while creating or after

var objectThree = {id:5, name:"Brad Pit"};
var objectFour = new Object();
objectFour.title = "the big dumb";
objectFour.description="he is the dumbiest, dummy";

var propertyOfObject = () =>{
    console.log(objectThree.id +" "+objectThree.name);
    console.log(objectFour.title+" "+objectFour.description);
}

var functionObject = {};
functionObject.doThings =()=>{
    console.log("assigned a function in a object after declearation of the object");
}
var functionObject1 = {
    doThings:()=>{
        console.log("assigned a function in a object with declearation of the object");
    }
}

var functionObject2 = {
    message: "both variable and method inside of an object",
    doThings:function(){ 
        // can not use arrow function if I want to use this keyword as this.message
        console.log(this.message);
    }
}
export  {propertyOfObject, functionObject, functionObject1, functionObject2};