class Finder{
    constructor(name, courses = []){
        this.name = name;
        this.courses = courses;
    }

    find(itemName){
        const index = this.courses.map((currentItem)=>currentItem.name).indexOf(itemName);
        return this.courses[index];        

    }
}

export default Finder;