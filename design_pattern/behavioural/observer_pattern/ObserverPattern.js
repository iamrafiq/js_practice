import Category from "./observerable/Category"
import Sales from "./observerable/Sales"
import ObserverShoper from "./ObserverShoper"

const designCategory = new Category("Desing Category");
const webDevCategory = new Category("Web Dev Category");
const personalDevCategory = new Category("Personal Dev Category");

const shoper1 = new ObserverShoper("Suru");
const shoper2 = new ObserverShoper("Nora");
const shoper3 = new ObserverShoper("Sweety");

const blackFridySales = new Sales();

const observerPattern=(()=>{

    const execute = () =>{

        designCategory.subscribe(blackFridySales);
        webDevCategory.subscribe(blackFridySales);
        personalDevCategory.subscribe(blackFridySales);
    
        designCategory.subscribe(shoper1);
        designCategory.subscribe(shoper2);
        designCategory.subscribe(shoper3);
        
        webDevCategory.subscribe(shoper1);
        personalDevCategory.subscribe(shoper2);
        personalDevCategory.subscribe(shoper3);
        designCategory.sales(20);
        webDevCategory.sales(10);
        personalDevCategory.sales(50);
       // console.log(blackFridySales);
    }

    return{
        execute:execute
    }

})()

export {observerPattern as observerPattern}
