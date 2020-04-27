
//for another example visit 
//https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/
//https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/
/*To start we simply need to attach an object to the global namespace. This object will
contain our root namespace. We'll name our namespace Island ; the code simply
looks like:*/
//Island = {};
/*This object is, by default, attached to the top level object so we need not do anything
more than that. A typical usage is to first check if the object already exists and use
that version instead of reassigning the variable. This allows you to spread your
definitions over a number of files. In theory you could define a single class in each
file and then bring them all together as part of the build process before delivering
them to the client or using them in an application. 
The short form of this is:*/

//Island = Island ||{};

/*Once we have the object, it is simply a question of assigning our classes as properties
of that object. If we continue to use the Castle object then it would look like:*/
let Island = {};
Island = Island ||{};
Island.Castle = function(name){
    this.name = name;
}
Island.Castle.prototype.build = function(){
    console.log("Castle built: "+this.name);
}

/*If we want to build a hierarchy of namespaces that is more than a single level deep,
that too is easily accomplished, as seen in this code:*/
let England={};
England = England ||{};
England.London = England.London||{};

England.London.Castle = function(name){
    this.name = name;

}

England.London.Castle.prototype.build=function(){
    console.log("London's castle: "+this.name);
}

var execute = ()=>{
    var islandCastle = new Island.Castle("Castle Of Island");
    islandCastle.build();

    var londonCastle = new England.London.Castle("Castle Of London");
    londonCastle.build();
}

//2nd way
let Bangladesh = {};
Bangladesh.Dhaka = Bangladesh.Dhaka||{};
const Parlament = (()=>{
    function Building(name){
        this.name = name;
    }
    Building.prototype.build=function(){
        console.log(this.name + " build on 1991");
    }
    return Building;
})();

Bangladesh.Dhaka.Parlament = Parlament;

const dhakaParlament= new Bangladesh.Dhaka.Parlament("Dhaka Parlament Building");
dhakaParlament.build();

export{execute as moduleExample};

