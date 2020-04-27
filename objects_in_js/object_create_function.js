let Castle = (function(){
    function Castle(name){
        this.name = name;
    }
})();

var fun = (function(){
    this.name = "hello";
    function Item(item){
        this.item = item;
    }
    
})();

let Castle = (function () {
    function Castle(name) {
    this.name = name;
    }
    Castle.prototype.Build = function () {
    console.log("Castle built: " + this.name);
    };
    return Castle;
    })();