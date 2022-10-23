function solve(array: number[]): number{
    return findOdd(array);
}

function findOdd(array: number[]): number{
    let map: Array<Array<number>> = [[], []];
    let result: number = 0.5;

    for (let i = 0; i < array.length; i++) {
        if(!map[0].includes(array[i])){
            map[0].push(array[i]);
            map[1].push(1);
        }
        else{
            let index = map[0].indexOf(array[i]);
            map[1][index] += 1;
        }
    }

    for (let i = 0; i < map[1].length; i++) {
        if(map[1][i] % 2 != 0){
            result = map[0][i];
            break;
        }
    }

    return result === 0.5 ? NaN : result;
}

export {solve};