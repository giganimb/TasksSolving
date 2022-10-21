import {solve as solvePermuteAPalindrome} from "./Permute a Palindrome/solution";
import {solve as solveFindTheOddInt} from "./Find the odd int/solution";
import {solve as solveReverseOrRotate} from "./Reverse or rotate/solution";
import {solve as solveSpecialMultiples} from "./Special multiples/solution";
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from "node:process";


const rl = readline.createInterface({input, output});

info();

rl.on('line', (input) => {
    if(input == "1"){
        rl.question("Input string: ", (value) => {
            console.log("Is your string permutation palidrome? - " + solvePermuteAPalindrome(value)  + "\n");
        });
    }
    else if(input == "2"){
        rl.question("Input number array separated by a space (example: '2 5 2'): ", (value) => {
            let arr: number[] = value.split(" ").map((el) => parseInt(el));
            console.log("The odd int - " + solveFindTheOddInt(arr) + "\n");
        });
    }
    else if(input == "3"){
        rl.question("Input N and MaxValue separated by a space (example: '3 200'), where N is a number of primes and MaxValue is a upper border of dividends: ", (value) => {
            let arr: number[] = value.split(" ").map((el) => parseInt(el));
            console.log("Count of special multiples - " + solveSpecialMultiples(arr[0], arr[1]) + "\n");
        });
    }
    else if(input == "4"){
        rl.question("Input number string and chunk size separated by a space (example: '123456987654 6'): ", (value) => {
            let arr: string[] = value.split(" ");
            console.log("Result number string - " + solveReverseOrRotate(arr[0], parseInt(arr[1])) + "\n");
        });
    }
    else if(input == "100"){
        console.clear();
        info();
    }
    else if(input == "-1"){
        console.clear();
        rl.pause();
    }
});

rl.on('SIGINT', () => {
    rl.question(
        'Are you sure you want to exit(yes/no)? ',
        (answer) => {
            if (answer.match(/^y(es)?$/i)) rl.pause();
        }
    );
});

function info(){
    console.log("Hi, User!");
    console.log("Choose a number and input it:");
    console.log("1 - to solve Permute a Palindrome");
    console.log("2 - to solve Find the odd int");
    console.log("3 - to solve Special numbers");
    console.log("4 - to solve Reverse or rotate");
    console.log("100 - to reset console");
    console.log("-1 - to exit\n");
}