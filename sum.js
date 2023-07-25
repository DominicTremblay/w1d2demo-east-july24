// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command-line arguments
const args = process.argv.slice(2);
console.log("Args:", args);

// edge case: We need at least 2 arguments.


// going through each argument
// for loop
// forEach
// for (let i=0; i<args.length;i++)
// for of

let total = 0;

for (let arg of args) {

  
  // add them up
  // typecasting
  total += Number(arg);
  console.log("args:", arg, "total:", total);

}

// edge case: If any argument is not a whole number, skip it.

// edge case: If any argument is not a number, output an error message.


// print the sum of them
console.log("Total:", total);

