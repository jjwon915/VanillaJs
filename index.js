/*
//  DOMError(Document Object Model)
//const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "black";

*/
// Tab 제목
document.title = "I own you now";

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(0, 0, 139)";
const OTHER_COLOR = "rgb(127, 140, 141)"

function handleClick(){
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

// HTML Javascript Event MDN 참고하기.
function init(){
    title.style.color = "BASE_COLOR";
    title.addEventListener("click", handleClick);
}

init();

function handelOffline(){
    console.log("ByeBye");
}

function handleOnline() {
    console.log("Welcome back");
}

// state of online and state of wifi off(=offline)
window.addEventListener("offline", handelOffline);
window.addEventListener("online", handleOnline);

//window.addEventListner("resize", handleResize()) : 지금 바로 호출하라는 의미.
// 필요한 경우에 호출하려면 아래처럼 ()없이 써야한다.
//window.addEventListener("resize", handleResize);
/*
window.addEventListener("click", handleClick);

if("10" === 10){
    console.log("hi");
} else {
    console.log("ho");
}


// user에게 물어볼 수 있게 하는것. 오래된 것이라 잘 사용하지 않음.
const age = prompt("How old are you?");
console.log(age);

if(age > 18 && age <= 21){
    console.log('you can drink but you should not');
} else if (age > 21){
    console.log('go ahead');
} else {
    console.log('too young');
}
*/