function solve(n: number, maxValue: number): number{
    return countSpecMult(n, maxValue);
}

function countSpecMult(n: number, maxValue: number): number{
    let multiply: number = 1;

    for (let i = 2, primeNumberCount = 0; primeNumberCount < n; i++) {
        if(isPrime(i)){
            primeNumberCount++; 
            multiply *= i;
        }
    }

    return Math.floor(maxValue / multiply);
} 

function isPrime(n: number): boolean{
    for(let i = 2; i <= n/2; i++){
        if(n % i === 0){
           return false;
        }
    };

    return true;
}

export {solve};

//Archived
//Execution Timed Out (12000 ms) - problem with time on codewars

// function countSpecMult(n: number, maxValue: number): number{
//     let counter: number = 0;
//     let arrOfPrimes: number[] = getPrimes(n);
//     console.log(arrOfPrimes);
//     let divider: number = arrOfPrimes.reduce((prev, cur) => prev * cur);

//     for (let i = 2; i < maxValue; i++) {
//         if(i % divider == 0){
//             counter++;
//         }
//     }

//     return counter;
// }

// function getPrimes(n: number): number[]{
//     const arr = [];
//     let i = 2;
//     while(arr.length < n){
//         if(isPrime(i)){
//             arr.push(i);
//         };
//         i = i === 2 ? i+1 : i+2;
//     };

//    return arr;
// }




