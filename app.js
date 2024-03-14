
let myString = "uzaima";
let reversedString = "";
for (let i = myString.length - 1; i >= 0; i--) {
    reversedString += myString[i];
}
console.log("Reversed string:", reversedString);

let isPalindrome = true;
for (let i = 0; i < myString.length / 2; i++) {
    if (myString[i] !== myString[myString.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
console.log("Is palindrome:", isPalindrome);

let userInput = prompt("Enter your name:");
console.log("User input:", userInput);

if (!isNaN(userInput)) {
    alert("Type: number");
} else {
    alert("Type: string", typeof userInput);
}

let givenArray = [1, 2, 3, 5, 6, 7];
let isConsistent = true;
for (let i = 1; i < givenArray.length; i++) {
    if (givenArray[i] - givenArray[i - 1] !== 1) {
        isConsistent = false;
        break;
    }
}
console.log("Is consistent:", isConsistent);