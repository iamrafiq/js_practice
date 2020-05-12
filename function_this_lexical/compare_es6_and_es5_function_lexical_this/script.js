//ES 5

var color = "red";
var position = 56;
window.color="blue";
var box5= {
    color:'green',
    position:1,
    clickMe:function(){
        var color = "RED";
        var position = "89";
        var obj = document.querySelector('.green');
        /*//not works
        obj.prototype.color = "blue";
        obj.prototype.position=35;*/

        
        /*var clickMeInside = function(){
            //this functon indicate the global object
            var str = 'This is box number '+this.position+
            'and it is '+this.color;
            alert(str); 
        }
        clickMeInside();*/
        var self = this;
        document.querySelector('.green').addEventListener(
            'click', function(){
                /*//works
                this.color="blue";
                this.position="7"*/
                var str = 'This is box number '+this.position+
                'and it is '+this.color;
                alert(str); // not accissiable 

                var str = 'This is box number '+self.position+
                'and it is '+self.color;
                alert(str); // works and gets the value from the context self object function hoisted
            })
        //got the values from the context function hoisted, 
          // and functon hoisted in box5 object context
         var str = 'This is box number '+this.position+
                 'and it is '+this.color;
                 alert(str);
    }

}

//box5.clickMe(); // var str = 'This is box number '+this.position+
//         'and it is '+this.color;
//         alert(str);

//ES6
const box6 = {
    color:"green",
    position:1,
    clickMe:function(){
        document.querySelector('.green').addEventListener(
            'click', ()=>{
                /*//works
                this.color="blue";
                this.position="7"*/
                var str = 'This is box number '+this.position+
                'and it is '+this.color;
                alert(str); 
            }
        )
    }
}

//box6.clickMe();

//EX6
const box66 = {
    color:"green",
    position:1,
    clickMe:()=>{
        document.querySelector('.green').addEventListener(
            'click', ()=>{
                /*//works
                this.color="blue";
                this.position="7"*/
                var str = 'This is box number '+this.position+
                'and it is '+this.color;
                alert(str); 
            }
        )
    }
}

//box66.clickMe()

function Person(name){
    this.name = name;
}
//ES5
Person.prototype.myFriends = function(friends){
   
    //problem
    var arry1 = friends.map(function(element){
        return this.name +' is friends with '+element;
    });
    console.log(arry1);

    //solution
    var fun= function(element){
        return this.name +' -is friends with '+element;
    }.bind(this);
    var arry4 = friends.map(fun);
    console.log(arry4)
    //or
    var arry3 = friends.map(function(element){
        return this.name +' is friends with '+element;
    }.bind(this));
    console.log(arry3);
    //or
    var self = this;
    var arry2 = friends.map(function(element){
        return self.name +' is friends with '+element;
    });
    console.log(arry2);
}

var friends = ['bob', 'jon','mark'];
new Person('Max').myFriends(friends);

//ES 6

Person.prototype.myFriends6 = function(friends){
   
    var arry1 = friends.map((element)=>{
        return this.name +' is friends with '+element;
    });
    console.log(arry1);
}

var friends6 = ['bob es 6', 'jon es 6','mark es 6'];
new Person('Max').myFriends6(friends6);