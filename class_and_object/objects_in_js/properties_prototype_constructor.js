var createPerson1 = ()=>{
    function PersonConstructor1(firstName, lastName, age, eyeColor){
        this.firstName=firstName,
        this.lastName = lastName; 
        this.eyeColor = eyeColor;
        this.age = age;
    };
    var person1 = new PersonConstructor1("Nora", "Jaman", 3, "Black");
    PersonConstructor1.prototype.hairColor="Black";
    
    PersonConstructor1.prototype.fullName = function(){
        return this.firstName + " "+this.lastName;
    }

    for(var prop in person1){
        console.log("Person 1::"+ prop+" : "+person1[prop]);
    }
}

var createPerson2 = ()=>{
    function PersonConstructor2(firstName, lastName, age, eyeColor){
        this.firstName=firstName,
        this.lastName = lastName; 
        this.eyeColor = eyeColor;
        this.age = age;
    };
    var person1 = new PersonConstructor2("Suru", "Jaman", 3, "Blue");
    person1.hairColor="Green";
    
    person1.fullName = function(){
        return this.firstName + " "+this.lastName;
    }

    for(var prop in person1){
        console.log("Person 2::"+ prop+" : "+person1[prop]);
    }
}

var execute = () =>{
    createPerson1();
    createPerson2();
}

export {execute as propsAndPrototype}

