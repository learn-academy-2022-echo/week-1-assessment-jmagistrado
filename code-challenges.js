// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
// Declare a function named fruitBasket
// input: 2 different strings
// expected output: the string with the longer string length 
// Use conditional statements to compare the two variables to see which variable's string has more characters 
// call to the function by using console.log 
// Excepted output: banana, cherry

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const fruitBasket = (word1, word2) => {
    if(word1.length > word2.length) {
        return word1 
    } else {
        return word2
    }
}

console.log(fruitBasket(fruit1, fruit2))
console.log(fruitBasket(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// Declare a funtion statement 
// parameter: myNumbers
// Input: the test variables provided 
// Use conditional statements to compare the variable values to the amount of 212.
// Needs a string interpolation in the conditional statement to include any number that is inputed into the function in the output. 
// Expected output: If a number inputed is equal to 212, it will output the "212 is at boiling point" . If a number is less than 212, it will output "Number is below boiling point." If the the number input is more than 212, it will output "Number is above boiling point"


const temp1 = 42
const temp2 = 350
const temp3 = 212

const heat = (myNumbers) => {
    if(myNumbers < 212){
        return `${myNumbers} is below boiling point`
    }      else if(myNumbers > 212) {
        return `${myNumbers} is above boiling point`
    } else if(myNumbers === 212) {
       return `${myNumbers} is at boiling point`
    }   
} 
console.log(heat(temp1))
console.log(heat(temp2))
console.log(heat(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// Declare a console.log() method 
// Use .concat() method to merge the new arrays within the variables given 
// create a new variable that is assigned to (myNumbers1.concat(myNumbers2)) which combines the 2 arrays 
// Declare console.log() method and use .length() built-in method to return the length of the string 
// Excepted output: 10 

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2))

var comboNumbers = (myNumbers1.concat(myNumbers2))
    console.log(comboNumbers.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// Convert string into an array by using the .split("") method 
// Create a new variable named cohort and assign it currentCohort.split("") 
// Call new variable cohort and use .reverse() to reverse the elements and then utilize .join("") to join all elements into one value 
// Excepted output: 2202 ohcE

const currentCohort = "Echo 2022"
    console.log(currentCohort.split(""))
var cohort = (currentCohort.split(""))
    console.log(cohort.reverse().join(""))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// Declare a loop function
// Use conditional statements to return if a number is odd or even 
// Within conditional statements, use modulo to determine if the number has a remainder 
// If the number has a remainder, the code will output odd. Set else statement, so that any number that is not odd, will output even
//  Excepted output: odd, even, odd, even, off, even


const myArray = [13, 34, 5, 10, 27, 42]
    for(let i =0; i < myArray.length; i++) {
        if(myArray[i] % 2 !== 0) {
            console.log("odd")
        } else {
            console.log("even")
        }
    }


// // --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// declare a function named totalAmount 
// input: any two values (for this example, we are using the variables given)
// Set an if statement to compare the two values. If the value entered is more than the second value, set the return to substract larger value from smaller value. 
//expected output: 42 for Set one, 3 for Set two 

// // Set one:
const number1 = 58
const number2 = 100

// // // Set two:
const number3 = 27
const number4 = 24

const totalAmount = (amountOne, amountTwo) => {
    if(amountOne > amountTwo) {
        return amountOne - amountTwo
    } else {
        return amountTwo - amountOne
    }
}
    console.log(totalAmount(number2, number1)) 
    console.log(totalAmount(number3, number4))
    

 