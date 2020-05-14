var functionObject = {
    message: "hello world",
    print: function () {
        console.log(this.message);
    }
}

let FuctionObject1 = function () {
    this.message = "Hi there",
    this.print = function () {
        console.log(this.message);
    }
}

let ThingDoer = function (greeting) {
    this.greeting = greeting;
    this.doThings = function () {
        console.log(this.greeting);
    };
}

var functionObjectInstance = ()=>{
    let thinDoer = new ThingDoer("Hi Thing Doer"); // 0k
    thinDoer.doThings(); 

    let thinDoer2 = new ThingDoer("Hi Thing Doer2"); // 0k
    thinDoer2.doThings(); 

    let funObj = new FuctionObject1(); // 0k
    funObj.print();

    let funObj1 = new functionObject(); // TypeError: functionObject is not a constructor
    funObj1.print();
}

export {functionObjectInstance}

/*objects are not the same thing as classes. Objects are instances of classes. If
we want to create multiple instances of our functionObject object we're out of luck.
Attempting to do so will result in an error.

Each time that a new instance is required, the object must be reconstructed. To get
around this we can define the object using a function as can be seen here:

This syntax allows for a constructor to be defined and for new objects to be created
from this function. Constructors without return values are functions that are called
as an object is created. In JavaScript the constructor actually returns the object
created. You can even assign internal properties using the constructor by making
them part of the initial function like so:
*/