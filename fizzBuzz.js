const { number } = require("yargs");

function fizzBuzz(number){
    let result='';
    if(number%3==0){
        result += 'Fizz';
    };
    if(number%5==0){
        result += 'Buzz';
    } else if(number%5!=0&&number%3!=0){
        result = number;
    }

    return result;
}


module.exports = {fizzBuzz};
