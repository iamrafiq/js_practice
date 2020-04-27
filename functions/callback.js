var CheckValidity = {
    check:function(licence, callback){
            if(licence > 100){
                setTimeout(()=>{
                    if(callback!=null){
                        callback("success", "Remaning time: "+(licence-100), this.update);
                    }
                }, 6000);
            }else{
                setTimeout(()=>{
                    if(callback!=null){
                        callback("timeout", "Remaning time: 0", this.update);
                    }
                }, 6000);
            }
    },
    update:function(userId, packageNumber, callback){
        setTimeout(()=>{
            if(callback!=null){
                callback("success", "Updated Successfully", null);
            }
        }, 6000);
    }
};
//above function is api, I am writing execute function using the api functions

//create custom map aip and set it to Array.prototype
const customMap = {
    myMap:function(userProvidedFuction){
        var newArray = [];
        console.log(this);
        for (let i=0; i< this.length; i++){
            let newElement = userProvidedFuction(this[i], i, this);
            if(newElement!=null){
                newArray.push(newElement); 
            }
        }
        return newArray; 
    }
}
Array.prototype.myMap=customMap.myMap;
const myArray = [8,4,7,3,1,5,7,9,10];
const modifiedArray = myArray.myMap((currentElement, index, originalArray)=>{
    return currentElement%2!=0?currentElement*2:null;
});

modifiedArray.forEach((element)=>{
    console.log("My map:"+element)
})

function execute(){
    //var checkValidity = new CheckValidity();
    CheckValidity.check(200,(status, message,callback)=>{
        let userWantToBuy = true;
        console.log(message);
        if(userWantToBuy){
            if(callback!=null){
                callback("userId", 6, (status, message, callback)=>{
                    console.log(message);
                } );
            }
        }

    });
}

export {execute as callBackExample}