/**
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

// using bruteforce
unction titleCase(str) {
  str = str.split(' '); // split string into array
  for(let i = 0; i< str.length; i++){ // loop through the string array
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase(); // take first letter in each element and capitalize, then use slice to obtain the remaining part of each element(in lowercase)
    // then concatenate
  }
  return str.join(' ');
}

titleCase("I'm a little tea pot");
