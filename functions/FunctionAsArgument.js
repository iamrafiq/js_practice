const FunctionAsArgument = (()=>{
    var birthYear = [1965,1999,2000,1987,1990,2018];
    function isFullAge(age){
        return age>18?true:false;
    }
    
    function calculateAge(year){
        return 2020 - year;
    }
    
    function arrayCalc(years, fn){
        let values=[];
        years.forEach(element => {
            values.push(fn(element))
        });
    
        return values;
    }

    const ages = arrayCalc(birthYear, calculateAge);
    const fullAgeList=arrayCalc(ages, isFullAge);
    return{
        ages:ages,
        fullAgeList:fullAgeList
    }
})();

export default FunctionAsArgument;
