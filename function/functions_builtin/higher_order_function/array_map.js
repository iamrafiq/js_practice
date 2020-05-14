
//https://www.freecodecamp.org/news/finding-your-way-with-map-aecb8ca038f6/
const celciusTemps = [22, 36, 71, 54];

//normal for or forEach loop
(function(cTemps){

    const FahrenheitTems=(function(){
        const fTems=[];
        for(let i = 0; i < cTemps.length; i++){
            let temp = cTemps[i] * (9/5) + 32;
            fTems.push(temp);
        }
        return{
            fahrenheitTems:fTems
        }
    })();

    let fTemps=FahrenheitTems.fahrenheitTems;
    for(let i = 0; i < fTemps.length; i++){
        console.log("for loop fahrenheit: "+ fTemps[i]);
    }

})(celciusTemps);


// now with map method
(function(cTemps){
    const fTemps = cTemps.map((currentTemp, index, orginalArray)=>{
            return currentTemp * (9/5) + 32;
    });

    fTemps.forEach((element)=>{
        console.log("Map method Fahrenheit value: "+element);
    });
})(celciusTemps);
console.log("...................");
//using map with filter (makes it reduce)
const nums = [4,5,8,10,4,7,56,2,3,1];
const filteredDouble = nums.filter((element, index, originalArray)=>{return element%2==0?true:false})
.map((currentItem, index, originalArray)=>{return currentItem*2});
filteredDouble.forEach((element)=>{
    console.log("Filtered Double"+element);
})
console.log("...................");
// maps with reverse
const reverseDouble = nums.reverse().map((currentItem, index, originalArray)=>{
    return currentItem*2;
});
reverseDouble.forEach((element)=>{
    console.log("Reverse Double:"+element);
});
console.log("...................");

const reverseFillteredDouble = nums.reverse().filter((element, index, originalArray)=>{
    return element%2==0?true:false;
}).map((currentItem, index, originalArray)=>{
    return currentItem*2;
});
reverseFillteredDouble.forEach((element)=>{
    console.log("Reverse Filtered Double:"+element);
});

//map on object
const obj = { 
    a: 1, 
    b: 2, 
    c: 3 
  }
const valuesOnly =  Object.values(obj).map((currentItem, index, orientation)=>{
    return currentItem;
});
valuesOnly.forEach((element)=>{
    console.log("Object(Key Value to Value Only):"+element);
});


//objects
const people = [
    {name: "Steve", age: 32},
    {name: "Mary", age: 28},
    {name: "Bill", age: 41},
 ];
 const names = people.map((currentItem, index, originalArray)=>{
     return "Name: "+currentItem.name + " Age: "+currentItem.age;
 })
 names.forEach((element)=>{
     console.log("Object To String Array: "+element);
 })
//now building a custom map method and adding it to Array.prototype
/*const myMap = (function(userProvidedFuction){
    var newArray = [];
    console.log(this);
    for (let i=0; i< this.length; i++){
        let newElement = userProvidedFuction(this[i], i, this);
        if(newElement!=null){
            newArray.push(newElement); 
        }
    }
    return newArray;
})();*/
const customMap = {
    myMap:function(userProvidedFuction){
        var newArray = [];
        console.log(this);
        for (let i=0; i< this.length; i++){
            let newElement = userProvidedFuction(this[i], i, this);
            if(newElement!=null){
                newArray.push(newElement); 
            }
        }
        return newArray; 
    }
}
Array.prototype.myMap=customMap.myMap;
const myArray = [8,4,7,3,1,5,7,9,10];
const modifiedArray = myArray.myMap((currentElement, index, originalArray)=>{
    return currentElement%2!=0?currentElement*2:null;
});

modifiedArray.forEach((element)=>{
    console.log("My map:"+element)
})
function execute(){

}

export {execute as arrayMapExample}