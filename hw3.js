// Write a JavaScript function to get the last element of an array
function lastElement(arr) {
  return arr[arr.length - 1];  
}

// Write a simple JavaScript program to join all elements of the following array into a string
let array = [2, 8, 16, 32, 140];
console.log(`Your last element is ${lastElement(array)}`);

//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual 
//index value from the given arrays and save them to third array 
let array2 = [8, 2, -6, -22, -130, 10];
let array3 = [];

let len = array.length > array2.length ? array.length : array2.length;

for (let i = 0; i < len - 1; i++) {
  array3[i] = array[i] + array2[i];  
}
console.log(array3);

// Write a JavaScript program to calculate the area and perimeter of a rectangle. 
//Rectangle should be an object with properties width and height and methods getArea() and getPerimeter()
let rectangle = {
  width: 10,
  height: 15,
  getArea: function() {return this.width * this.height;},
  getPerimeter: function() {return this.width * 2 + this.height * 2;}
}
console.log(`Area = ${rectangle.getArea()}, Pepimeter = ${rectangle.getPerimeter()}`);