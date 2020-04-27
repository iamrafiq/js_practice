let personObj={
    firstName:"Nora", 
    lastName:'Zaman', 
    age:3,
    fullName:function(){
        return this.firstName + " "+this.lastName;
    }
}

var print = () =>{
    console.log("First name: "+personObj.firstName+" Last name:"+personObj.lastName+ 
    " Age :"+personObj.age + " Full Name: "+personObj.fullName());
    personObj.nationality="bangladeshi";
    console.log("First name: "+personObj['firstName']+" Last name:"+personObj['lastName']
    + " Age :"+personObj['age'] +" Nationality: "+personObj['nationality']
    +"Full Name: "+personObj['fullName']());

    delete personObj.age;

    for(let prop in personObj){
        if(prop=="fullName"){
            console.log(prop+": "+personObj[prop]());

        }else{
            console.log(prop+": "+personObj[prop]);

        }
    }

    //converting ot array 
    var myArray = Object.values(personObj);
    for(let i=0; i<myArray.length; i++){
        console.log(myArray[i]);
    }

    //stringify
    var myString = JSON.stringify(personObj);
    console.log(myString);

}

export {print as propertiesOfObject}