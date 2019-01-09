// var Student = /** @class */ (function () {
//     function Student(firstName, middleInitial, lastName) {
//         this.firstName = firstName;
//         this.middleInitial = middleInitial;
//         this.lastName = lastName;
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
//     return Student;
// }());
// function greeter(person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// var user = new Student("Jane", "M.", "User");



function Animal(id,name,title){
    this.id = id ;
    this.name = name ;
     this.title = title;
     this.sayHi = function(){
         console.log('123');
     }
}
Animal.prototype.sayName= function(){
    console.log(` the value `);
}

function Dog(id,name,title,age){
    Animal.apply(this,[id,name,title])
    this.age =age;
}
Dog.prototype = Animal;
Dog.prototype.sayOne = function(){
    console.log('div od om s.');
}
let dogs = new Dog(1,'hashiqi','12345',20);
console.log(dogs.name);
dogs.sayOne()
dogs.sayHi()

let objects = Object.create(Object.prototype);
console.log(objects);
let arr =  [10,2,34,5,6,7,8];
arr.sort(function(a,b){
    if(a>b){
        return 1;
    }else if(a==b){
        return 0;
    }else{
        return -1;
    }
}) 
console.log(arr);