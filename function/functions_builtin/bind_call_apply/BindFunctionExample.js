const BindFunctionExample = (function(){
    var jon = {
        name:`jon`,
        age:35,
        job:`teacher`,
        presentation:function(style, timesOfDay){
            if(style==="formal"){
                console.log(`Good ${timesOfDay} I am ${this.name}, my age ${this.age}, my profession is ${this.job}`);
            }else{
                console.log(`Hey there I am ${this.name}, my age ${this.age}, my profession is ${this.job}, have good ${timesOfDay}`);

            }
        }
    }

    function execute(){
        jon.presentation("formal", "morning")

        var zaman ={
            name:`zaman`,
            age:3,
            job:`Mathmatician`
        }

        const suruPresentation = jon.presentation.bind(zaman, "formal", "morning"); // binding with all arguments
        suruPresentation();

        var nora ={
            name:`nora`,
            age:3,
            job:`Mathmatician`
        }

        const noraPresentation = jon.presentation.bind(nora); // binding with no arguments
        noraPresentation("formal", "morning");// later we are passting arguments

        var rafiq ={
            name:`rafiq`,
            age:3,
            job:`Mathmatician`
        }

        const rafiqPresentation = jon.presentation.bind(rafiq, "formal"); // binding with 1 argument
        rafiqPresentation( "morning");// later we are passting rest of arguments
    }

    return{
        execute:execute
    }
})();

export default BindFunctionExample;