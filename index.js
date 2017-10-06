var chalk = require("chalk");

var message = chalk.blue("Hello, " + "World!");
console.log(message);

console.log(chalk.green(
  'Remember to ' +
  chalk.blue.underline.bold('brush your teeth') +
  ' before you leave for bootcamp today!'
));

var brushedTeeth = false

if(brushedTeeth === false) {
  const error = chalk.bold.red;
  const warning = chalk.keyword('orange');
  const teethNotBrushed = chalk.keyword('yellow')

  console.log(error('Error!'));
  console.log(warning('Warning!'));
  console.log(teethNotBrushed('Teeth not brushed!'))
}

console.log("Shutting down...")
console.log(chalk.black("Goodnight, World."));