class Category{
    constructor(name){
        this.name = name;
        //Category is observerable object so it must have list of subscribers
        //becaue we will notify particular user about sales about particular category
        //
        this.subscriberes = [];
    }

    subscribe =(observer)=>{ // observer is our shoper
        this.subscriberes.push(observer);
    }

    sales = (discount)=>{
        //now notify each subscriber / observer about this particular sale
        this.subscriberes.forEach((element)=>{
            element.notify(this.name, discount);
        });
    }
}

export default Category;