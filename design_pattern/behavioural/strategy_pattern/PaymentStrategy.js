class PaymentStrategy{
     
    static Card(user){
        console.log(`${user} will pay with a credit card`);
    }

    static PayPal(user){
        console.log(`${user} will pay with a Paypal`);

    }

    static BKash(user){
        console.log(`${user} will pay with a Bkash`);
    }
}

export default PaymentStrategy;