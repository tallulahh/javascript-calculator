let num1, num2, symbol;
let equation = [];
let ops;
let result;
const show = document.querySelector(".screen");

function createEquation(){
  let index;
  
  if (!equation.includes("x" || "/" || "+" || "-")){
    console.log("error in input");
  }
  if (equation.includes("x")){
      ops = "multiply";
      index = equation.indexOf("x");
    } else if (equation.includes("/")) {
      ops = "divide";
      index = equation.indexOf("/");
    } else if (equation.includes("+")) {
      ops = "add";
      index = equation.indexOf("+");
    } else if (equation.includes("-")) {
      ops = "subtract";
      index = equation.indexOf("-");
    }
  
  const arg1 = equation.slice(0,index).join("");
  const ops1 = equation.slice(index, index + 1);
  const arg2 = equation.slice(index + 1, equation.length).join("");
 
  switch (ops) {
    case 'multiply':
      multiply(arg1, arg2);
      break;
    case 'divide':
      divide(arg1, arg2);
      break;
    case 'add':
      add(arg1, arg2);
      break;
    case 'subtract':
      subtract(arg1, arg2);
      break;
    default:
  }
  
}

function add(num1, num2){
  result = num1 + num2;
  console.log(result);
  
};

function subtract(num1, num2){
  result = num1 - num2;
  return result;
};

function divide(num1, num2){
  result = num1 / num2;
  console.log(result);
};

function multiply(num1, num2){
  result = num1 * num2;
  return result;
  // equation = [];
}

document.addEventListener("click", function(e){
  
  if ($(e.target).hasClass("box") && e.target.innerHTML === "="){
    console.log("not clickable");
    equation = [];
    show.innerHTML = result;
  } else if ($(e.target).hasClass("box") && e.target.innerHTML == "C"){
    equation = [];
  show.innerHTML = "0";
  } else if ($(e.target).hasClass("box")){
    const arg = e.target.innerHTML;
    equation.push(arg);
    show.innerHTML = equation.join(' ');
  } else {
    console.log("not clickable");
  }
  
})
