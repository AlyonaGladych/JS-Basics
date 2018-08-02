/* Write a JavaScript program to break an address of an urland put it's part into an array. 
URL structure : ://.org[/] and there may be no part in the address */

function breakUrl(url) {
  let arr = url.split("/");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(breakUrl("https://eleks.com/services/quality-assurance-and-testing-services/"));

/* Write few figures' objects (circle, triangle, square). Create function to calculate area of each figure (
one function should handle all objects). Sort objects by area */
let circle = {
    r: 20
};

let triangle = {
    a: 5,
    b: 7
};

let square = {
    a: 8
};

function objectSquare (obj) {
    switch (obj) {
        case circle: return Math.round(Math.PI * Math.pow(obj.r, 2));
        case triangle: return obj.a * obj.b / 2;
        case square: return Math.pow(obj.a, 2);
    }
};

function sortNumbers(a, b, c) {
  let numbers = [a, b, c];
  
  if (numbers[0] > numbers[1]) {
    swap(0, 1);
  }
  if (numbers[0] > numbers[2]) {
    swap(0, 2);
  }
  if (numbers[1] > numbers[2]) {
    swap(1, 2);
  }
  return numbers;
  
  function swap(index1, index2) {
    let temp = numbers[index1];
    
    numbers[index1] = numbers[index2];
    
    numbers[index2] = temp;
  }
}
console.log(sortNumbers(2, -81, 4))
console.log(sortNumbers(objectSquare(square), objectSquare(circle), objectSquare(triangle)));

/* Write a calculator function with three parameters , two arguments and math action to do with them. 
Handle some of general math rules */
function Calculator(a, b, action) {

    if (typeof a !== "number" || typeof b !== "number")  
        return "Please enter the numbers or google first how calculator works"; 

    switch (action) {
        case "+": return getSumm(a, b);
        case "-": return getDiff(a, b);
        case "*": return getMult(a, b);
        case "/": return getDiv(a, b);
    }
}
function getSumm(a, b) {
    return a + b;
}

function getDiff(a, b) {
    return a - b;
}

function getMult(a, b) {
    return a * b;
}

function getDiv(a, b) {
    if (b)
    return a / b;
    else return "You can't devide by 0. Please have some dignity and enter appropriate nymber";
}
console.log(Calculator(8, 0, "/"));