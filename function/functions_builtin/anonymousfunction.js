 //https://stackoverflow.com/questions/1634268/explain-the-encapsulated-anonymous-function-syntax
 //anonymous functions and greetings variables scope
 //https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 /*
 A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). 
 The main difference between a function expression and a function declaration is the function name, 
 which can be omitted in function expressions to create anonymous functions.
A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
See also the chapter about functions for more information.

https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#Function_declaration_hoisting


Function expressions in JavaScript are not hoisted, unlike function declarations.
You can't use function expressions before you define them:

The function declaration (function statement) defines a function with the specified parameters.
You can also define functions using the Function constructor and a function expression.

A function created with a function declaration is a Function object and has all the properties, methods and behavior of Function objects. See Function for detailed information on functions.



Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. You can use the function before you declared it:

hoisted(); // logs "foo"

function hoisted() {
  console.log('foo');
}

Note that function expressions are not hoisted:

notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
*/
var greetingsFromOutsideForArrowFunction="Yes I am Greetings from outside Arrow";
(()=>{
     console.log("Inside arrow function");
     this.greetings = "Greetings from inside arrow function";
     var self = this;
     (function(){
           var greetings="Hello There";
         console.log(greetings+" Are you? " + self.greetings);
    })();

    (() => {
        var greetings="Hi There";
        console.log(greetings+" Are you? " +greetingsFromOutsideForArrowFunction);
    })();
 })();

 const outsideFunction = "I am from outside function";

 (function(outside){
  console.log("Inside function............................");
  var self = this;
  (function(){
        var greetings="Hello There";
      console.log(greetings+" Are you? " + outside);
 })();

 (() => {
     var greetings="Hi There";
     console.log(greetings+" Are you? " +outside);
 })();
 })(outsideFunction);

function execute(){
  //no need call any function from here just importing-
  // will execute all the code because all are anonymous function
  //anonymousArrowFuction;
  //anonymousNormalFunction;
}
export {execute as anonymousFunction};
/*
export default anonymousArrowFuction = () => {
    console.log("Application Start Calling from Anonymous function modules_in_js/anonymousfunciton.js")

}
*/



