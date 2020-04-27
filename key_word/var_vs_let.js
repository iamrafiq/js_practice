var scopeTesting = ()=>{
    for (var varScoped = 0; varScoped<10; varScoped++){
        console.log("inside for loop varScoped:"+varScoped); // executed 
    }
    
    console.log("out for loop varScoped:"+varScoped); // executed 
    
    for (let letScoped = 0; letScoped<10; letScoped++){
        console.log("inside for loop varScoped:"+letScoped); // executed
    }
    
    console.log("out for loop letScoped:"+letScoped); // ReferenceError: letScoped is not defined
}

/*With the var scoped version you can see that the variable lives on outside of the
block. This is because behind the scenes the declaration of varScoped is hoisted to
the beginning of the code block. With the let scoped version of the code letScoped
is scoped just within the for loop so, once we leave the loop, letScoped is
undefined. When given the option of using let or var we would tend to err on the
side of always using let . There are some cases when you actually would want to use
var scoping but they are few and far between.
*/
export {scopeTesting}
