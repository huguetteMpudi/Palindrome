/* Stacks! */

// functions: push, pop, peek, length
const palindrome = function(word) {

this.letters = []; // this is our stack

this.word = word;

this.rword = "";

// put letters of word into stack
for (this.i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

// pop off the stack in reverse order
for (this.i = 0; i < word.length; i++) {
   rword += letters.pop(); 
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}


}

palindrome("racecar");