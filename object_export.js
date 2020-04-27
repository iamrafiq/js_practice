var _object = {
    animimalName:"null",

    setAnimalName: (name)=>{
        this.animimalName=name;
    },
    getAnimalName:()=>{
        return (this.animimalName==null)?"Please set name":this.animimalName;
    }

}

export default _object;