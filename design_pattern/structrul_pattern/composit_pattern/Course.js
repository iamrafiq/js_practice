class Course{
    constructor(title, price = 0){  // 0 is deafult value
        this.title = title;
        this.price = price ;
    }

    total=()=>{
        return this.price;
    }

    print=()=>{
        console.log(`${this.title}- ${this.price}`);
    }
}

export default Course;