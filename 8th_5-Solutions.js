/*
------   1   -------

Repeat a given string str (first argument) for num times (second argument). 

Return an empty string if num is not a positive number. 

For the purpose of this challenge, do not use the built-in .repeat() method.

SOLUTION

function repeatStringNumTimes(str, num) {
    let resultArr = [];
    for(let i = 0; i < num; i++){
    resultArr.push(str)
    }
    return resultArr.join("")
}

------   2   -------
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 

Return the truncated string with a ... ending.

SOLUTION

function truncateString(str, num) {
    if (str.length <= num){
        return str
    }
    else {
        return str.slice(0, num) + "...";
    }
}

------   3   -------

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.



SOLUTION

function booWho(bool) {
    return bool === true || bool === false ? true : false;
}

------   4   -------

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 

This means that given an element x, the 'truth test' is passed if func(x) is true. 

If no element passes the test, return undefined.

SOLUTION 

function findElement(arr, func) {
  return arr.find(num => num % 2 === 0)
}

/*function findElement(arr, func) {
  return arr.find(func);
}
*/
------   5   -------

Return the provided string with the first letter of each word capitalized. 

Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.


SOLUTION

function titleCase(str) {
  const word = str.toLowerCase().split(" ")
  return word.map(a => a = a[0].toUpperCase()+a.slice(1)).join(" ")
}



*/