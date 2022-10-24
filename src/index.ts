import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { program } from 'commander';
import { solve as solvePermuteAPalindrome } from './Permute_a_Palindrome/solution';
import { solve as solveFindTheOddInt } from './Find_the_odd_int/solution';
import { solve as solveReverseOrRotate } from './Reverse_or_rotate/solution';
import { solve as solveSpecialMultiples } from './Special_multiples/solution';

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-ps, --palindrome_str <string>', 'param for "Permute a palindrome" task')
  .option('-foia, --find_odd_int_arr <numbers...>', 'param for "FindThe odd int" task')
  .option('-smn, --special_multiples_n <number>', 'param for "Special multiples" task')
  .option('-smmv, --special_multiples_max_value <number>', 'param for "Special multiples" task')
  .option('-rorns, --reverse_or_rotate_number_string <string>', 'param for "Reverse or rotate" task')
  .option('-rorcs, --reverse_or_rotate_chunk_size <number>', 'param for "Reverse or rotate" task')
  .parse(process.argv);

const rl = readline.createInterface({ input, output });
const options = program.opts();

if (options.palindrome_str) {
  console.log('Is your string permutation palidrome? - ' + solvePermuteAPalindrome(options.palindrome_str) + '\n');
}
if (options.find_odd_int_arr) {
  const arr: number[] = options.find_odd_int_arr.map((el: string) => parseInt(el));
  console.log('The odd int - ' + solveFindTheOddInt(arr) + '\n');
}
if (options.special_multiples_n && options.special_multiples_max_value) {
  console.log('Count of special multiples - ' + solveSpecialMultiples(parseInt(options.special_multiples_n),
    parseInt(options.special_multiples_max_value)) + '\n');
}
if (options.reverse_or_rotate_number_string && options.reverse_or_rotate_chunk_size) {
  console.log('Result number string - ' + solveReverseOrRotate(options.reverse_or_rotate_number_string,
    parseInt(options.reverse_or_rotate_chunk_size)) + '\n');
}

info();

rl.on('line', (input) => {
  switch (input) {
  case '1':{
    rl.question('Input string: ', (value) => {
      console.log('Is your string permutation palidrome? - ' + solvePermuteAPalindrome(value) + '\n');
    });
    break;
  }
  case '2':{
    rl.question('Input number array separated by a space (example: \'2 5 2\'): ', (value) => {
      const arr: number[] = value.split(' ').map((el) => parseInt(el));
      console.log('The odd int - ' + solveFindTheOddInt(arr) + '\n');
    });
    break;
  }
  case '3':{
    rl.question('Input N and MaxValue separated by a space (example: \'3 200\'), where N is a number of primes and MaxValue is a upper border of dividends: ', (value) => {
      const arr: number[] = value.split(' ').map((el) => parseInt(el));
      console.log('Count of special multiples - ' + solveSpecialMultiples(arr[0], arr[1]) + '\n');
    });
    break;
  }
  case '4':{
    rl.question('Input number string and chunk size separated by a space (example: \'123456987654 6\'): ', (value) => {
      const arr: string[] = value.split(' ');
      console.log('Result number string - ' + solveReverseOrRotate(arr[0], parseInt(arr[1])) + '\n');
    });
    break;
  }
  case '100':{
    console.clear();
    info();
    break;
  }
  case '-1':{
    console.clear();
    rl.pause();
    break;
  }
  }
});

rl.on('SIGINT', () => {
  rl.question(
    'Are you sure you want to exit(yes/no)? ',
    (answer) => {
      if (answer.match(/^y(es)?$/i)) {
        rl.pause();
      }
    },
  );
});

function info() {
  console.log('\nHi, User!');
  console.log('Choose a number and input it:');
  console.log('1 - to solve Permute a Palindrome');
  console.log('2 - to solve Find the odd int');
  console.log('3 - to solve Special multiples');
  console.log('4 - to solve Reverse or rotate');
  console.log('100 - to reset console');
  console.log('-1 - to exit\n');
}
