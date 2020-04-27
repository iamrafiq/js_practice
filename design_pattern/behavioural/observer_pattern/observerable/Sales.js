class Sales{
    constructor(){
        //list of all sales like summer sale, friday sale
        this.sales = [];
    }

    notify(categoryName, discount){
       // console.log(`we have sales for following categories`);
        this.sales.push({categoryName, discount});
    }
}

export default Sales;