//Write a JavaScript function to check if given string includes given symbol
function findChar(str, char) {
  if (str.indexOf(char) != -1) 
      return "There is such symbol";
      return "Sorry, no such symbol here";
}
console.log(findChar("Vasyl", "f"));

// Write a JavaScript function to check whether a string is blank or not
function isStrBlank(str) {
  let strArray = str.split(" ");
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
        return "String contains something";
    }
  } return "String is blank";

}
console.log(isStrBlank("   s    "));

// Write a JavaScript function to convert a string in abbreviated form
function getAbbreviation(str) {
  let abbr = ""; 
  let arr = str.split(" ");
  
  if (isStrBlank(str) == "String is blank") {
    console.log("You didn't enter any data. Please try again");
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    abbr += arr[i].slice(0, 1) + ".";
  }
  return abbr;
}
console.log(getAbbreviation("Alyona Gladych"));

// Write a JavaScript function that accept two integers and display the larger
function largerInt(a, b) {
  if (a > b) return a;
  return b;  
}
console.log(largerInt(4, 12) + " is larger");
 
// Write a JavaScript function with conditional statement to sort three numbers
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
