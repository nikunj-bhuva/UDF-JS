// que 1 //

// function isPalindrome(str) {

//     str = str.toLowerCase();

//     let reversedStr = str.split('').reverse().join('');

//     return str === reversedStr;
// }

// let inputString = prompt("enter your Number: ");

// if (isPalindrome(inputString)) {
//     console.log(inputString + "this is palindrome");
// } else {
//     console.log(inputString + "this is not a palindrome");
// }

// que 2 //

// function haveSameLastDigit(num1, num2, num3) {

//     let lastDigit1 = num1 % 10;
//     let lastDigit2 = num2 % 10;
//     let lastDigit3 = num3 % 10;

//     return (lastDigit1 === lastDigit2) && (lastDigit1 === lastDigit3);
// }

// let number1 = parseInt(prompt("enter your first Number:"));
// let number2 = parseInt(prompt("enter your second Number:"));
// let number3 = parseInt(prompt("enter your third Number:"));

// if (haveSameLastDigit(number1, number2, number3)) {
//     console.log("same last digits");
// } else {
//     console.log("not same last digits");
// }

// que 3 //

function isArmstrongNumber(num) {
    let temp = num;
    let sum = 0;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = parseInt(temp / 10);
    }
    return sum === num;
}

let number = parseInt(prompt("enter your Number: "));

if (isArmstrongNumber(number)) {
    console.log(number + "this is armstrong number");
} else {
    console.log(number + "this is not armstrong number");
}
