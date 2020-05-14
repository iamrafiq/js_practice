function add(a){
    return function(b){
        return a+b;
    }
}
console.log(add(20)(20));
//output: 40

const y= function (m){
    return function(x){
        return function (c){
            return m*x+c
        }
    }
}

console.log(y(10)(5)(10)); 
//out put: 60
