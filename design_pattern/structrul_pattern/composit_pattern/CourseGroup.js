class CourseGroup{
    constructor (title, composite=[]){ // composite is a array
        this.title = title;
        this.composite = composite;
    }

    total=()=>{
        return this.composite.reduce((total, nextItem, index, array)=>{
            return total+nextItem.total();
        },0);
    }

    print=()=>{
        console.log(`**********${this.title}********`);
        this.composite.forEach((element)=>{
            element.print();
        })
        console.log(`*******************`);
    }
}

export default CourseGroup;