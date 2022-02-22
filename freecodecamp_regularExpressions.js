// 1---Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


// 2---Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


// 3---Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);


// 4---Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);


// 5---Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line


// 6---Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


// 7---Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


// 8---Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


// 9---Match Letters of the Alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line


// 10---Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// 11---Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /[^3ie]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


// 12---Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);


// 13---Match Characters that Occur Zero or More Times

// Only change code below this line
let chewieRegex = /A*a*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);


// 14---Find Characters with Lazy Matching



// 15---Find One or More Criminals in a Hunt



// 16---Match Beginning String Patterns



// 17---Match Ending String Patterns



// 18---Match All Letters and Numbers



// 19---Match Everything But Letters and Numbers



// 20---Match All Numbers



// 21---Match All Non-Numbers



// 22---Restrict Possible Usernames



// 23---Match Whitespace



// 24---Match Non-Whitespace Characters



// 25---Specify Upper and Lower Number of Matches



// 26---Specify Only the Lower Number of Matches



// 27---Specify Exact Number of Matches



// 28---Check for All or None



// 29---Positive and Negative Lookahead



// 30---Check For Mixed Grouping of Characters



// 31---Reuse Patterns Using Capture Groups



// 32---Use Capture Groups to Search and Replace



// 33---Remove Whitespace from Start and End