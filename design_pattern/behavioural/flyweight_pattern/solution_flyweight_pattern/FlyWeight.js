
class FlyWeight{
    constructor(user, completed){
        this.user = user;
        this.completed = completed;
    }
}

const FlyWeightFactory = (()=>{
    const flyWeights = {};
    const get = (user, completed)=>{
        if(!flyWeights[user+completed]){
            flyWeights[user+completed] = new FlyWeight(user, completed);
        }
        return flyWeights[user+completed];
    }

    const getCount = ()=>{
        let count = 0;
        for (f in flyWeights){
            count++;
        }
        return count;
    }

    return{
        get:get,
        getCount:getCount
    }
})();

export {FlyWeight, FlyWeightFactory}