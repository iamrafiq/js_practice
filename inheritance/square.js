import Rectangle from "./rectangle"
class Square extends Rectangle{
    
    constructor(width, height){
        super();
        this.width=width;// this.width is parent member
        this.height=height; // this.height is parent member
    }
    set type(t){
        this._type=t;
    }
    get type(){
        return this._type
    }
    getArea=(t)=>{
        console.log(this.type);
        return this.area(this.type);
    }
}

export default Square;