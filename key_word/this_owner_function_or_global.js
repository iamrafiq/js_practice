var functionObject = {
    greeting: "hello world",
    doThings: function () {
        console.log(this.greeting);
        this.doOtherThings();
    },
    doOtherThings: function () {
        console.log(this.greeting.split("").reverse().join(""));
    }
}
functionObject.doThings();//prints hello world then dlrow olleh

/*The this keyword behaves differently in JavaScript than you might expect coming
from other C-syntax languages. this is bound to the owner of the function in which
it is found. However, the owner of the function is sometimes not what you expect. In
the preceding example this is bound to the functionObject object, however if the
function were declared outside of an object this would refer to the global object. In
certain circumstances, typically event handlers, this is rebound to the object firing
the event*/

/*Let's look at the following code:*/
var target = document.getElementById("someId");
target.addEventListener("click", function () {
    console.log(this);
}, false);

/*this takes on the value of target. Getting used to the value of this is, perhaps, one
of the trickiest things in JavaScript.*/