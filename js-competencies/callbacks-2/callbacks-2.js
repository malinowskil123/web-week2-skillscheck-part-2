//+++++++++ Start Here! All problems are below. +++++++++//

//////////////////PROBLEM 1////////////////////

//Create a function called invokesCallbacks that takes
//three parameters: a number, a callback, and another callback.
//If the number is greater than 10, invokesCallbacks should
//return the FIRST callback param invoked. Else, invokesCallbacks
//should return the SECOND callback param invoked.

//Code here

const invokesCallbacks = (number, callback, anotherCallback) => {
  return number > 10 ? callback(number) : anotherCallback(number);
};

//////////////////PROBLEM 2////////////////////

//Within the function timedGreeting below, create a
//setTimeout (a native javascript method)
//that assigns the result
//of invoking the callback parameter
//to the variable greeting, after 1 second.

var greeting;

function timedGreeting(callback) {
  return setTimeout(() => {
    greeting = callback();
  }, 1000);
}
