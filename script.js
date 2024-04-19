
//Program that asks the user for a number is Even or Odd.

alert("Program that asks the user for a number is Even or Odd")
let number=Number(prompt("Enter a number:"));
if (number % 2 == 0)
alert("The number is even");
else
alert("The number is odd");


//Program that asks the user for two numbers; which one is greater

alert("Program that asks the user for two numbers; which one is greater");
let first_number=Number(prompt("Enter a first number:"));
let second_number=Number(prompt("Enter a second number:"));
if (first_number > second_number)
alert("The first number is greater than the second number");
else
alert("The second number is greater than the first number");


//Program that asks the user for a number is less than 10.

alert("Program that asks the user for a number is less than 10.")
let num_ber=Number(prompt("Enter a number:"));
if (num_ber < 10)
alert("The number is less than 10");
else
alert("The number is greater than or equal to 10");


//Program that prints the numbers from 1 to 10.

alert("Program that prints the numbers from 1 to 10.");
for(let i=1; i<=10; i++)
alert(i);
//console.log(i);


//Program that prints the even numbers from 1 to 10.

alert("Program that prints the even numbers from 1 to 10.");
for(let i=1; i<=10; i++)
{
if (i % 2 == 0)
alert(i);
//console.log(i);
}


//Program that prints the odd numbers from 1 to 10.

alert("Program that prints the odd numbers from 1 to 10.");
for(let i=1; i<=10; i++)
{
if (i % 2 != 0)
alert(i);
//console.log(i);
}
