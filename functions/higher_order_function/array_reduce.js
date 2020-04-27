//https://www.freecodecamp.org/news/reduce-f47a7da511a9/
//https://www.freecodecamp.org/news/reduce-f47a7da511a9/

const sumModule = (()=>{
    var myArray=[40,50,10,11,9];
    const sum=myArray.reduce((accumulator, curentVal)=>{
        console.log(accumulator);
        return accumulator+curentVal;
    });
    function print(){
        console.log("Sum of MyArray is:"+sum);
    }
    return{
        sum:sum,
        print:print,
        myArray:myArray
    };
})();

const avrageModule=(()=>{
    const avrage = sumModule.myArray.reduce((accumulator, currentVal, index, array)=>{
        console.log(index);
        //console.log(sumModule.myArray.length);
        return index == array.length-1?(accumulator+currentVal)/array.length:accumulator+currentVal;
    });

    var print = ()=>{
        console.log("Avarage of MyArray is:"+avrage);
    }

    return{
        avrage:avrage,
        print:print
    }
})();

const modifiedArray=(()=>{
    const newArray= sumModule.myArray.reduce((accumulator, currentVal)=>{
         accumulator.push(currentVal*2);
         return accumulator;
    },[]);
    function print(){
        console.log(newArray);
    }
    return{
        newArray:newArray,
        print:print
    }
})();

const tallyModule=(()=>{
    var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    const petsTally = pets.reduce((accumulator, current)=>{
        if(!accumulator[current]){
            accumulator[current]=1;
        }else{
            accumulator[current]+=1;
        }
        return accumulator;
    },{});

    function print(){
        console.log(petsTally);
    }
    return{
        petsTally:petsTally,
        print:print
    }
})();
function execute(){
    sumModule.print();
    avrageModule.print();
    modifiedArray.print();
    tallyModule.print();
    
}

export{execute as reduceFunctionExamples};




