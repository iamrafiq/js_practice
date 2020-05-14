


const moduleEvenArray = (() => {
    const myArray = [6, 3, 5, 4, 1, 2, 7, 10, 45, 23];
    const evenArray = myArray.filter((element) => {
        return element % 2 == 0 ? true : false;
    });
    function print() {
        console.log(evenArray);
    }
    return {
        evenArray: evenArray,
        print: print
    }
})();

const modulePassedStudent = (() => {
    const students = [
        { name: 'Quincy', grade: 96 },
        { name: 'Jason', grade: 84 },
        { name: 'Alexis', grade: 100 },
        { name: 'Sam', grade: 54 },
        { name: 'Katie', grade: 90 }
    ];

    const passedArray = students.filter((element) => {
        return element.grade >= 55 ? true : false;
    });
    function print() {
        console.log(passedArray)
    }
    return{
        passedArray:passedArray,
        print:print
    }

})();

function execute(){
    moduleEvenArray.print();
    modulePassedStudent.print();
}

export{execute as arrayFilterFunctionExample}