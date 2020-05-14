//ES 5

var arry = ['jhon', 18];
var name = arry[0];
var age = arry[1];

//ES 6

const [name1, year] = arry;
console.log(name1);
console.log(year);

const obj = {
    firstName:"Jhon",
    lastName:"Smith"
}

const {firstName, lastName}=obj;
console.log(`${firstName}---${lastName}`);

const {firstName:a, lastName:b} = obj;
console.log(`${a}---${b}`);

function calcAgeRetirment(year){
    const age = new Date().getFullYear()-year;
    return[age, 65-age];
}

const[age2, retirement]=calcAgeRetirment(1990);
console.log(`${age2}---${retirement}`);
