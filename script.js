//variable declaration
let str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!`~@#$%^&*()_}{][:;|1234567890";
let num = "";
let char = "";
let length = "";
let pass = "";
let numVal;
let charVal;
let Val =""
//selecting elements
let input = document.querySelector(".input");
let copy = document.querySelector(".copy");
let copied = document.querySelector(".copied");
let range = document.getElementById("length");
let numlength = document.querySelector(".numlength");

copyToClipboard();
passwordGenerator();
//adding logic

//copy on clipboard
function copyToClipboard() {
  copy.addEventListener("click", () => {
    setTimeout(() => {
      copied.style.opacity = 0;
    }, 600);
    clipboard = window.navigator.clipboard.writeText(input.value);
    copied.style.transform = "translateY(-28px)";
    copied.style.visibility = "visible";
    copied.style.opacity = 1;
  });
}

//generating password
let prevVal;
function passwordGenerator() {
  numlength.innerText = `length (${range.value})`;

  range.addEventListener("input", () => {
    pass = prevVal;
    prevVal -= pass;
    input.value = pass;
    generatePass();
  });
}

function generatePass() {
 

  for (let i = 0; i < range.value; i++) {

numVal = Math.floor(Math.random() * num.length);
numVal += prevVal
  
 
charVal = Math.floor(Math.random() * char.length);
    
    prevVal = Math.floor(Math.random() * str.length);
    prevVal = str.charAt(prevVal);

    input.value += prevVal;

    numlength.innerText = `length (${input.value.length})`;
  }
}


generatePass();


