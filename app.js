const FIRST_NAME="";

let myFirstName = GET_MY_FIRST_NAME();
function GET_MY_FIRST_NAME(){
    const FIRST_NAME = "Laksh";
    return FIRST_NAME;
}
console.log(myFirstName);
console.log(FIRST_NAME);
// why javascript run code without line by line even it is a intrepreted language = the function GET_MY_FIRST_NAME is hoisted, meaning it is available to be called before its definition due to function hoisting in JavaScript.
// what is mutable and immutable in various case



function getMyFullName(firstName= '' , lastName = ''){
    return firstName +" "+ lastName;
   
}

let myMistakeFullName = getMyFullName("Lakshay")

function add(intOne , intTwo){
    return intOne + intTwo;
}
function substraction (intOne , intTwo){
    return intOne - intTwo;
}

let resultOne = getMyFullName("laksh" , "Soni");
let resultTwo = add(5 , 5);
let resultThree = substraction(10 , 5);

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
console.log(myMistakeFullName);

// challenge 1 - in this pattern cant ignore optional parameters = 
// challenge 2 - i cant pass dynamic or as much as needed parameters  = by using spread operator of ES6

console.log(declaredFunction()); // Outputs: "This is a declared function"

function declaredFunction() {
    return "This is a declared function";
}


function applyOperation(a, b, operation) {
    return operation(a,b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(3, 4, add)); // 7
console.log(applyOperation(3, 4, multiply));