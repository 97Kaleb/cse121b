/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(n1, n2){
    let n3 = n1 + n2;
    return n3;
}
function addNumbers(){
    let n1 = Number(document.querySelector("#add1").value);
    let n2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(n1, n2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(n1, n2){
    let n3 = n1 - n2;
    return n3;
}
let subtractNumbers = function(){
    let n1 = Number(document.querySelector("#subtract1").value);
    let n2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(n1, n2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (n1, n2) => n1 * n2;
let multiplyNumbers = () =>{
    let n1 = Number(document.querySelector("#factor1").value);
    let n2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(n1, n2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (n1, n2) => n1 / n2;
let divideNumbers = function (){
    let n1 = Number(document.querySelector("#dividend").value);
    let n2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(n1, n2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let roundNumber = (n) =>{
    let nRounded = Number(Math.round(n * 100)) / 100;
    return nRounded;
}
let getTotal = () =>{
    let total = 0;
    let sub = Number(document.querySelector("#subtotal").value);
    let member = document.querySelector("#member");
    if (member.checked){
        total = sub * .8;
    }else{
        total = sub;
    }
    let totalRounded = roundNumber(total);
    document.querySelector("#total").textContent = `$${totalRounded}`;
}
document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").textContent = array1;
/* Output Odds Only Array */
let filterOdd = (n) =>{
    if (n % 2 == 1){
        return n;
    }
}
let odds = array1.filter(filterOdd);
document.querySelector("#odds").textContent = odds;
/* Output Evens Only Array */
let filterEven = (n) =>{
    if (n % 2 == 0){
        return n;
    }
}
let evens = array1.filter(filterEven);
document.querySelector("#evens").textContent = evens;
/* Output Sum of Org. Array */
let sum = (n1, n2) => n1 + n2;
let sumOfArray = array1.reduce(sum, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;
/* Output Multiplied by 2 Array */
let arrayMult = (n) => n * 2
let multiplied = array1.map(arrayMult);
document.querySelector("#multiplied").textContent = multiplied;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = array1.map(arrayMult).reduce(sum, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;