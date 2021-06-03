// cached elements

const counter = document.querySelector('.display');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const numberFun = document.querySelector('.input');

// constants and variables



const initpoint = 0;
const initinput = 1;

let point = initpoint;
let input = initinput;

// functions

// it took me a minute of research to get these to work but this in
// collaboration with the initial input variables made my code pretty clean
// even thought it took me almost an hour and a half to figure out

function inputFill(){
  counter.innerHTML = point;
  numberFun.value = input;
}

function addNumber(){
  if (isNaN(numberFun.value)){
    return;
  } else {
    point = parseInt(numberFun.value) + point;
    counter.innerHTML = point;
    color();
  }
}

function minusNumber(){
  if (isNaN(numberFun.value)){
    return;
  } else {
    point = point - parseInt(numberFun.value);
    counter.innerHTML = point;
    color();
  }
}

function color(){
  if (point < 0){
    counter.style.color="red";
  } else {
    counter.style.color="black"
  }
}

inputFill();

// EVENT LISTENERS

minus.addEventListener("click", () =>{
  minusNumber();
});

plus.addEventListener("click", () =>{
  addNumber();
});
