import Payment from "./Payment"


const strategyPattern = (()=>{
    const execute = ()=>{
        const paymentMethod = new Payment();

        paymentMethod.showPaymentMethod("Suru");
        paymentMethod.showPaymentMethod("Nora");
        
        paymentMethod.changeStrategy("PayPal");
        
        paymentMethod.showPaymentMethod("Rafiq");
    }
    return{
        execute:execute
    }
})();

export {strategyPattern}