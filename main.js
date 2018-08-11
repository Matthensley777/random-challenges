// Create a function that takes two numbers as arguments and return their sum.

function addingTwoNumbers () {

	var a = 5;
	var b = 3;
	var sum = a + b;

	console.log("sum", sum);

};

function subtractingNumbers () {
	var a = 7;
	var b = 3;
	var answer = a - b;

	console.log("answer", answer)
}

// Create an array that contains the letters of the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];


// The stackLetter function should accept the array as the sole argument
function stackLetters (alphabet) {
}
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
 
var aStack = [];
 for (var i = 0; i < alphabet.length; i++) {
 	
 	aStack.push(alphabet[i]);
 	if(i % 3 === 2)
 	aStack.push(" ");


 console.log(aStack.toString().replace(/,/g, ""));
 }


// Invoke the function and pass in the array
stackLetters(alphabet)