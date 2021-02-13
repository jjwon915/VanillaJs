function sayHello(name, age){
    //console.log('Hello!', name, "you have", age, "years of age.");
    //console.log(`Hello ${name}! You are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}

// greetJewon = return value of sayHello
const greetJewon = sayHello("Jewon", 15);
//return 값 출력
console.log(greetJewon);

const calcurator = {
    plus: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a*b;
    },
    div: function(a, b){
        return a/b;
    }
}

const plus = calcurator.plus(5, 5);
console.log(plus);