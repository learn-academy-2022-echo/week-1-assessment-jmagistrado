# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A conditional statement is also known as a if/else statement. We are setting conditions for the computer to do something where if something happens and the value is true, then do this. Otherwise, do this instead. With conditional statements, you must have at least one if statement. You are able to set multiple else if statements in case the computer does not find the value to be true. Lastly, you can have one else statement, which would be a catch all for any other values that make be inputted that are not met within the previous conditions. 

Researched answer: I have used conditional statements within JavaScript plenty of times before. It is very handy to use for when you are handling decisions and want the computer to output a specific thing depending on the value inputed. Conditional statements are like a decision tree. Conditional statements perform different actions depending on if a boolean condition comes out as true/false. 

For example: If I said "If the value is 10, output true. If the value is not 10, output false."

In the case that the value inputted was 11, the computer would give me back the answer as "false." 

 Conditional statements include a minimum of a single if statement. However, you are free to add an as many else if statements as you please if you'd like more options within your decision structure. Lastly, you can set a condition to have an else statement, which would be a "catch all" for any values that are inputted that do not match the parameters you've set.  

1. What is git? What is the difference between git and Github?

Your answer: Git is the global information tracker. It allows developers to work on the same code without interfering with other developer's work. Git allows multiple people to download the same code from the main source and create copies and add their own code. Once developers are done with their work, they can submit their work into GitHub and merge their code into the main source once approved. 

GitHub is a place where code lives online. Developers are able to use GitHub to store their code and make it available for others to see. You can also deploy your code within Github and have a unique url where others are able to see your work. Within GitHub, multiple developers could access one code and work on it on their local machines. Once they are done, they upload the code back into GitHub where their work can be reviewed, receives comments/feedback. Once developers have agreed that the work is suffice, they are able to merge their work into the main code source. 

Researched answer: Git is something that I am very familiar with as I use it on a daily basis when I am coding. Git, which is also known as the Global Information Tracker, is an opened-sourced version control system that is used within the developer space. This is a tool which is used by developers to work on teh same code, share code, and write code for the same main code base. Git is a system that can be accessed through the terminal of your local machine.

GitHub is a website that anyone can access where it allows for code to be stored within their plateform. This allows for collaboration between developers because you can have direct access to a main code base from anywhere. 

The difference between Git and Github is that Git is located within your local machine through the terminal and it allows you to work on code remotely and upload it to a place like GitHub which stores the code for anyone to access. 

2. Which JavaScript operators will return a Boolean value?

Your answer: There are a few operators that will return a Boolean value which I have used within working on my own code in the past. The first type would be the Equality operator which has two types: loose and strict. Loose operator is for when you are reviewing two values and the computer turns the values into the same data type before it compares them. Loose operator is denoted with two equal signs ==. This means that if you are looking at two values of 3 (which is a number) and "3" (which a string), the computer will convert the two data types to be the same before it looks to see if it is the same value. In this case, if 3 == "3", the value would return as true. 

The strict operator is just like it's name. When using this operator, it will not convert the values before it compares them to see if the are true or false. The strict operator is denoted with three equal signs ===. This means, if we are looking at the same example above but with the strict operator 3 === "3", the value would be false. This is because the two values being review are not the same data type. 3 is a number, and "3" would be consider a string as it is wrapped with quotation marks. 

Researched answer: With my research, I have found that there are many different operators that will return a Boolean value. The first would be the equality operator which has two types of operators within it. Loose and strict. Loose operator converts the items to the same data type before the computer makes a comparsion between the two. An example of when I used a loose equality operator would be when I wanted to see if the number 42 and string "42" was the same thing. Since loose operator is represented by ==, I put 42 == "42" in my code. When I ran this, I see that the Boolean came out to true. This is because the computer converted both items before it made its comparsion. 

There is a strict operator as well. This is different to the loose operator because it requires that both items are the same data type to return a value. So, if we are comparing 42 and string "42", the output would be false since they are both two different data types. 

Relational operators also return a Boolean. For this type of operator, the computer looks for the relationship between two values and returns a Boolean. I've used this operator before when I want to make conditional statements and reviewing if a value is greater than another value. 

Lastly, there is the logical operator that also outputs a Boolean value. Within the logical operator, you can review for and, or, not. And or operators will take two complete statements and chain them together when they are being evaluated. What is different between and and or is that and operators are represented by && and it needs both sides of the comparsion to equal to true. On the other hand, for the logical or operator, it is represented by || and this operator only needs one side of the comparsion to be true. 

There is also a not operator. This operator reviews the opposite of the value inputted. One time when I used the bang operator it was when I made a conditional statement where if the value was not 1, to output a certain sentence. To make sure the computer knew this, I had to set the condition with the bang operator which is denoted by !=. 

3. What is an index? What is the difference between index and value?

Your answer: The index is the specific location of a value within the variable. The value itself is whatever the variable is set to. 

Researched answer: With my research, I have found that index is associated with Arrays. As arrays are basically a container to stores multiple values within an ordered list, the values are associated with a certain location in case the value needs to be called. This way mthe computer knows exactly what you are talking about and what value you need to have reviewed. The location of the value is called the index. Arrays are zero indexed, which only means that the first element in the array has the location of zero. To find the other value's index, you must start at zero and count up a whole number with every value. 

A value would be definited as each element that is within an array. The value also must be a data type. The difference between value and index is that the value is the information, and index would be the information's location. 


4. What is iteration?

Your answer: An iteration is the process of continously making changes until a condition is met. 

Researched answer: An iteration in Javascript is the idea of a code being done over and over again until the set conditions within the code are met. This idea of iteration can be associated with for loops since for loops are pieces of code that will continuously run until the parameters a developer has set is met. 

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming  is a technique that is super useful to collaborate, learn code, and teach code. The idea of pair programming is that you are paired with another developer to write code together. Between the two of you, there will be a driver and a navigator. 

As a driver, it essential means that you are the one who will be typing the code out. The navigator will be the one who will be speaking out load and letting the driver know what kind of code needs to be typed, guiding the driver to type out the neccessary code. 

Being the driver doesn't mean that this developer will be passive. Both developers will share their thoughts and opinions of how they want to approach the problem to solve it. After a while, the developers will switch roles to give them practice to both type the code and communicate what code needs to be written. 

This technique helps developers work together as they can see and hear what the other one is thinking. It also gives developers practice on communication skills. 


Researched answer: I've used pair programming before and I find it a very useful technique. There are many reasons why paired programming is great for developers to use. As people have a different knowledge base and their own strengths, being paired together can lead to better solutions than ones that someone might come up with themselves. Having someone to talk through the probelm can strengthen your understanding of concepts you are reviewing and work out problems that you might be stuck on. Additionally, having another person review code can lead to less mistakes which is critical when writing code. For paired programming to work, there are 2 roles that a pair can step in: the driver and navigator. 

The driver is when one developer is the actual person typing the code on the keyboard. Their responsiblities include following the directions given by the navigator and entering it into the computer. Because the driver is listening for the navigator's instructors, they must be attentive. To ensure that both parties have the ability to be both the driver and navigator, it is important to switch roles so that both sides can experience bth roles. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: A higher order function is a way for the computer to use a function that will look at another function as the argument to their function. Alternatively, instead of using a function as an argument to your function, higher order function can also produce a function as the output of your initial function. 

2. Jest: Jest would be a framework within Javascript. This means it is multiple files that are being collected to manage dependency files. It uses yarn techinology which was created by Facebook. 

3. Objects: Objects is considered another Javascript data type. Objects are a way to store collection of data where you are able to manipulate. They can contain static information as well actions, such as functions. 

4. Method: When the data type Object contains a function, it is called a method. This means that you can have actions performed on objects. 

5. Classes: Classes would be defined as a function that can contain behavior and data. It would be the template that is used to create an object. 
