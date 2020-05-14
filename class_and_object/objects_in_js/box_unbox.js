//the box and unbox premetive in java script

var numberOne = new Number(5)
var numberTwo = null;
var numberThreee=numberOne+new Number(numberTwo);
var numberFoure = Object.create(numberTwo);

var typeOfNumberVars = ()=>{
        console.log(typeof numberOne);
        console.log(typeof numberTow);
        console.log(typeof numberThreee);
        console.log(typeof numberFoure);

}

export default typeOfNumberVars;