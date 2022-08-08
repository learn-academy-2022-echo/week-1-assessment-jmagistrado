// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
5

// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain:
// My answer was correct. The code that is currently written as is, would output the number of 5. Currently, there are four different elements in the array. However, we can see that there is a .push() built-in being used, it means that we are asking the computer to add "indigo" into the array. As we used the function console.log() and built-in method .push() to add in "indigo" as another element, the output of this, will give us the amount of the array, including the newest element. This in turn will change our array amount from 4 to 5. 

// --------------------1) What will this log?
10

// const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10 
// b) Verify and explain:
// My answer was correct as I predicted the output would come out as 10. Looking at this, I can see that the variable is being assigned a data type of a string with the information of "LEARN 2022". I can see there is a .length within our code. .length() is a informational command that returns the number of elements in the array. By utilizing function console.log(), we are asking the computer to recall the declared variable cohort and use the built-in method .length to output the amount of elements used within the string. "LEARN 2022" has an index amount of 9. Because .length counts the elements from 0, it adds 1 to the last index. This is why I knew the output would be 10. 


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain:
// My answer of o was correct when I ran my code. Looking at this code, I can see that variable was assigned to a string of "Hello World!". The function of console.log() is calling for the computer to review the variable of greeting. Seeing that within the parentheses, followed after greeting, are square brackets []. These square brackets indicate an array which are zero indexed. This indicated to me that we are asking for the computer to find the index of 4 within the data type of string. As arrays are zero indexed, you must start your count with the first element as 0 and work your way up. When you do this, you will find that the letter "o" index is 4. 

// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain:
// Before running this code, I predicted that the answer/output would be Ruby which was correct. Looking at this code, I can see that the variable languages was assigned an array of four different strings as elements. There is another variable named index that is assigned a number of 1. Looking at the function of console.log(), it is calling for the computer to review the array in the variable languages and look for the element that has the location of 1.  I know we are looking for the location of 1 because within the function console.log(), we are also calling for the second variable index. As arrays are zero indexed, the computer reviewed the array and started counting the elements starting from zero. Thus the output was Ruby since it has the location of 1. 

// --------------------4) What will this log?

// const weekendDays = ["saturday","sunday"]
// console.log(weekendDays.toUpperCase())


// a) Your answer: SATURDAY, SUNDAY 
// b) Verify and explain:
// My answer to the output was incorrect. I had predicted that code would output SATURDAY, SUNDAY in all caps because within our function console.log(), I see that we are asking the computer to reference the variable weekendDays and use the built-in method of toUpperCase. toUpperCase is used to change a string and upper case all elements, so I assumed that using it would upper case all letters within each string of the array. 

// However, when I ran the code within the terminal, I was faced with an error message that said the built-in method .toUpperCase is not a function. This confused me because I had used this built-in method to upper case strings before within javaScript. With my research, I have learned that the built-in method .toUpperCase is not supported for arrays and is a string method. To make this work, you would have to first make the array into a string and then utilize the .toUpperCase built-in function to capatilize all letters. To make the array a string, you can use the built-in method .toString() and the .toUpperCase(). The code would look like this: 

// console.log(weekendDays.toString().toUpperCase())

// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: 3
// b) Verify and explain: My prediction was that the output of this code was 2 was incorrect. 

// Looking at this code, I see that we are using the function console.log() to recall the array element's length which would be the last index +1. However, when running the code, I can see the output of this was "number". The reason why the output is "number" is because within the console.log, we are calling for the typeof operator which means it returns a string indicating the type of data type we are using. Since we are also calling for the .length () built in-method and .length returns the value that represents the number of characters in the string, our output is number because the computer thinks we want to know the data type of .length which is a number. 