class Rect{
    
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    area = ()=>{
        return this.width*this.height;
    }

    print=(area)=>{
        global.console.log(area);
    }
}

export default Rect;