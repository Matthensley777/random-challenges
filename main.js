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
    
 
var aStack = [];
 for (var i = 0; i < alphabet.length; i++) {
 	
 	aStack.push(alphabet[i]);
 	if(i % 3 === 2)
 	aStack.push(" ");


 console.log(aStack.toString().replace(/,/g, ""));
 }


stackLetters(alphabet)

//Star Christmas Tree!

function christmasTreeVars() {
	var treeSize = document.getElementById("size").value;
	var treeCharictor = document.getElementById("char").value;
	var tree =  {height:treeSize*1,  char:treeCharictor};
	growTree(tree);
	}	
function growTree(treeObject) {
	for (var i = 0; i < treeObject.height; i++){
		var chars = 2*i+1;
		var spaces = treeObject.height-(i+1);
		console.log(" ".repeat(spaces)+treeObject.char.repeat(chars))
		}
}

//Your task is to loop through all the reindeer in the array, 
//and add the name of the reindeer to the single HTML <div> element provided. 
//The name of the reindeer should be prepended with the corresponding 
//color from the other array.

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

var colorsReindeer = [];

for (var i = 0; i < reindeer.length; i++) {
colorsReindeer.push (colors[i] + " " + reindeer [i]);
	
	}

console.log(colorsReindeer);
















