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
