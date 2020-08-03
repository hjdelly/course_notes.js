//Function Constructors, ‘new‘ and the History of JavaScript
//The new keyword is a JavaScript operator.

//Immediately after its use, a brand new empty object is created.

//A function constructor is an function that it used to create an object.

//As long as the object doesn't have a return statement, it will return the object that was built.

function Person() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}

//a new object is created that points to
//the object that has the this keyword
var john = new Person();
console.log(john);
//Function constructors – a normal function that is used to construct objects. The this variable points to a new empty object, and that object is returned from the function automatically.

//Function Constructors and ‘.prototype'
//When function constructors are used, its prototype is automatically set.

//Functions always have a prototype property but it is used only by the new operator.

//adding to the object that was created using the new keyword

Person.prototype.getFullName = function(){
  return this.firstname + ' ' + this.lastname;
}
//Adding methods to prototypes is commonly done, as opposed to adding them directly to the functions. If they were put directly on the objects(function), each function would have the method and will take up more space. So, it is more efficient to add methods on the prototype.

//Dangerous Aside: ‘new' and functions

//If you forget to use the ‘new' keyword, the JavaScript engine will run the functions as functions. The properties on the constructors will not be found.

//Any function that is a function constructor should have a capital letter to help you quickly see that you may the ‘new‘ keyword attached to your function.

//Conceptual Aside: Built-In Function Constructors
//JavaScript has several built-in function constructors such as Number, Date, and String.

//You can easily add utilities to these constructors by using the .prototype keyword.

//adding my own method to the Number object
Number.prototype.isPositive = function (){
    return > 0;
}

var a = new Number(3);
console.log(a.isPositive);
//output
true

//Dangerous Aside: Built-In Function Constructors
//If you use built-in function constructors to construct primitives, you may run into trouble when trying to compare items.

var a = 3; //this is a primitive
var b = new Number(3); //this creates an object

console.log(a == b) //returns true because the object
                    //will be coerced into a number
console.log(a === b) //returns false because comparison
                    // is a primitive with an object.
//It's best to use primitives, the literal values.
//Dangerous Aside: Arrays and for..in
//Arrays are objects, so they include name value pairs.

//This means that you can add properties onto the prototype like so:

Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr){
  console.log(prop + ':' + arr[prop]);
}

//the above will return the properties
0: John
1: Jane
2: Jim
myCustomerFeature: cool
//so, don't use for in to iterate through arrays.
//Object.create and Pure Prototypal Inheritance
//JavaScript accepts the Object.create() method.

var person = {
   firstname: 'Default',
   lastname: 'Default',
   greet: function (){
       return 'Hi' + this.firstname;
  }
}
//create a object and use the passed object 
//as the prototype
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);