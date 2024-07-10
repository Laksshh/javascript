function star(str1,str2) {
return str1 +" "+ str2;
}
console.log(star("Amitabh","Bachan"));   // default function with parameters


result = fatherName("Manoj" , 9929364184)
function fatherName(name , contactNo) {
    return name +" "+ contactNo;
}
console.log(result);  // function Expression with hoisting

let age = () => 19;  // simple arrow function in one line
let area = (length , width) => {
     return length*width;
}
console.log(area(20 , 15));  // arrow function with parametrs and curly brackets

function cafe(hot = "coffee", cold = "shakes") {
    return hot +" "+ cold;
}

let menu = cafe("mocktail" );
console.log(menu);  // default parameters

function student(...names) {
   return names;
}
let list = student("laksh" , "mayank" , "arpit");
console.log(list);  // rest parameters

function countryName({first , second ,third}){
    return `Country Names ${first} ${second} ${third}`;
}

const list1 = {
    first: 'India',
    second: 'Usa',
    third: 'England'
}
console.log(countryName(list1));  // Destructing Parameters


function perimeter(sides){
    return 4 * sides;
}
console.log(perimeter(6));  // naming convention

function cube(num){
    return num*num*num;
}
console.log(cube(7));


