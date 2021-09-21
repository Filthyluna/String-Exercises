//GROUP MEMBERS: Khazine, George, Melanie

//DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:

function DrEvil(number) {
  //checks if number is 1 million dollars first
  if (number == 1000000) {
    //if true it returns the string with pinky at the end
    return console.log(number + " dollars (pinky)");
  }
  else {
    //if not true it returns the string without pinky at the end
    return console.log(number + " dollars");
  }
}

DrEvil(10); //reg test
DrEvil(1000000);//pinky test




//Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 

function mixUp(str1, str2) {
  //Slice out first two characters - set them to their own variables
  let newstr1 = str1.slice(0, 2);
  let newstr2 = str2.slice(0, 2);

  //Replace these characters with ones from the other string - set them to their new strings
  let updatedstr1 = str1.replace(newstr1, newstr2);
  let updatedstr2 = str2.replace(newstr2, newstr1);

  //Create variable that holds the concatenation 
  const conc = updatedstr1 + " " + updatedstr2;

  //return it to print
  return console.log(conc);
}

mixUp("mix", "pod"); //test 1
mixUp("dog", "dinner");//test 2




//Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below
function fixStart(string) {
  var firstChar = string.charAt(0);
  let newString = firstChar + string.slice(1).replace(new RegExp(firstChar, "g"), '*');
  
  return newString;
}

console.log(fixStart("babble"));






//Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below

function verbing(string) {
  if (string.length < 3) {
    return string;
  }
  else if (string.length >= 3 && string.slice(-3) != "ing") {
    if (string.endsWith("m")) {
      return string + "ming";
    }
    else {
      return string + "ing";
    }
  }
  else if (string.length >= 3 && string.slice(-3) == "ing") {
    return string + "ly";
  }
}

console.log(verbing("swim"));






//Create a function called notBad that takes a single argument, a string
//It should find the first appearance of the substring 'not' and 'bad'
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just 
//return the original sentence
//For example
//notBad('This dinner is not that bad!'): 'This dinner is good!'
//notBad('This movie is not so bad!'): 'This movie is good!'
//notBad('This dinner is bad!'): 'This dinner is bad!'
//write answer below 
function notBad(string) {
  var notPlace = string.indexOf("not");
  var badPlace = string.indexOf("bad");
  if (notPlace == -1 || badPlace == -1 || badPlace < notPlace) {
    return string;
  }
  else {
    let newString = string.slice(0, notPlace) + "good" + string.slice(badPlace + 3);
    return newString;
  }
}

console.log(notBad("This dinner is not that bad!"));
