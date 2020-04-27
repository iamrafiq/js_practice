class ObserverShoper{
    constructor(name){
        this.name = name;
    }

    notify(categoryName, discount){
        console.log(`${this.name}, there is a sale for ${categoryName} course! ${discount} discount off for every course `);
    }

}

export default ObserverShoper;