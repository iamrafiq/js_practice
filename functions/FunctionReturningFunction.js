const FunctionReturningFunciton = (function(){
    function interviewQuestion(job){
        return function(name){
            if(job==="teacher"){
                console.log(`Hi  ${name}, what subject do you teach`);
            }else if(job=="programmer"){
                console.log(`Hi ${name}, what languge are prefar to build website`);

            }else{
                console.log(`Hi ${name}, tell me your experties`);
            }
        }
    }
    return{
        interviewQuestion:interviewQuestion
    }
})();

export default FunctionReturningFunciton;