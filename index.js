/*
console.log('Im working. Im JS. Im beautiful. Im worth it');
// 상수 : const, 변수 : let, var(예전에는 이것만 있었다.)
var a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

//String
const what = "Nicolas"
console.log(what);

// Boolean is not text.
const wat = false;

// Number
const wat = 666;

// Float 
const wat = 55.1;
*/

// javascript 변수 규칙 :  Camel case(lower case로 시작해 변수명 중간에 스페이스 필요하면 upper case를 쓴다.)
// Array
const something = "Something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, something];
console.log(daysOfWeek);

// Object : {}를 통해 생성. Object 안의 값은 변경할 수 있지만 Object 자체를 변경시킬수는 없다. Objec안에 Array를 넣을 수 있다. Array안에도 Object 넣기 가능.
const jewonInfo = { 
    name:"Jewon", 
    age:25,
    isHandsome:true,
    favMovies:["Soul", "Frozen", "Darknight"],
    favFood:[
        {name:"Kimchi", fatty: false},
        {name : "Cheese Burger", fatty : true}
    ]
};
console.log(jewonInfo.age);

jewonInfo.age = "35";

console.log(jewonInfo);
console.log(jewonInfo.age);