import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = 1;
let end = 100;
let deler1 = 2;
let deler2= 5;

for (start; start < end; start++){
    if (start % deler1 == 0 && start % deler2 == 0){
        console.log(start);
    }
}

process.exit();