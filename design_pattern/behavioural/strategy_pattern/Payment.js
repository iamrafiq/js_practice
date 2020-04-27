import PaymentStrategy from "./PaymentStrategy";
//https://stackoverflow.com/questions/35580950/get-the-static-methods-of-a-class
class Payment{
    constructor(strategy = "BKash"){
        this.strategy = PaymentStrategy[strategy];
        console.log(PaymentStrategy["ss"]);

        console.log(Object.getOwnPropertyNames(PaymentStrategy));
    }

    changeStrategy(newStratgey){
        this.strategy = PaymentStrategy[newStratgey];

        console.log(`***Payment Strategy Changed***`);
    }

    showPaymentMethod(user){
        this.strategy(user);
    }
}

export default Payment;