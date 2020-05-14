//Question write a functon sum(a)(b)(c), which return the sum of a+b+c;
var sum = function(a,b,c){
    if(b===undefined){
        return function (b){
            if(c===undefined){
                return function(c){
                    return a+b+c;
                }
            }
            return a+b;
        }
    }
}

 const res = sum(10)(20)(30);
 console.log(res);


 function add(a){
     return function(b){
         return a+b;
     }
 }
 console.log(add(20)(20));