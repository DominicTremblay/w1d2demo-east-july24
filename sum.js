// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command-line arguments
const args = process.argv.slice(2);
console.log('Args:', args);

// edge case: We need at least 2 arguments, if not output an error message
if (args.length < 2) {
  console.log('Error: please enter at least 2 arguments');
  // stop the execution here
  // return; // it works!!
  process.exit();
}

let total = 0;

// going through each argument
// for loop
// forEach
// for (let i=0; i<args.length;i++)
// for of
for (let arg of args) {
  // add them up
  // edge case: If any argument is not a whole number, skip it.

  const convertedNum = Number(arg);

  if (Number.isInteger(convertedNum)) {
    // typecasting
    total += convertedNum;
  }
  console.log('args:', arg, 'total:', total);
  // edge case: If any argument is not a number, output an error message.
  if (isNaN(convertedNum)) {
    console.log('Error: please enter only numbers');
    process.exit();
  }
}

// print the sum of them
console.log('Total:', total);
