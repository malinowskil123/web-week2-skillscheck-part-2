//////////////////PROBLEM 1////////////////////

//Create a prototype for a String called reverse that returns the string but, like, reversed.

//Code here

String.prototype.reverse = function() {
  let strArr = this.split(""),
    newString = "";
  for (let i = this.length - 1; i >= 0; i--) {
    newString += strArr[i];
  }
  return newString;
};

"blah".reverse();

//////////////////PROBLEM 2////////////////////

// Based on the constructor below for a Person, create a prototype called drinkCoffee, and readDocumentation

// drinkCoffee should increase energy by 10, increase linesOfCode by 50, and decrease quality of code by 1, and returns Person object.
// readDocumentation should decrease energy by 20, decrease linesOfCode by 30, and increase quality of code by 3, and returns Person object.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.energy = 50;
  this.linesOfCode = 0;
  this.qualityOfCode = 5;
}

//Code here
Person.prototype.drinkCoffee = function() {
  this.energy += 10;
  this.linesOfCode += 50;
  this.qualityOfCode -= 1;
  return this;
};

Person.prototype.readDocumentation = function() {
  this.energy -= 20;
  this.linesOfCode -= 30;
  this.qualityOfCode += 3;
  return this;
};
