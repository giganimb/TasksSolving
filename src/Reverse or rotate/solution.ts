function solve(str: string, chunkSize: number): string{
    return revrot(str, chunkSize);
}

function revrot(str: string, chunkSize: number): string{
    if(str.length === 0 || chunkSize <= 0){
        return "";
    }

    let chunkArr: string[] = [];
    let sum: number = 0;
    let result: string = "";

    for (let i = 0; i < str.length; i+=chunkSize) {
        chunkArr.push(str.substring(i, i + chunkSize));        
    }
    
    for (let i = 0; i < chunkArr.length; i++) {
        if(chunkArr[i].length == chunkSize){
            sum = getSumOfCubesOfChunkDigits(chunkArr[i]);

        if(sum % 2 == 0){
            result += reverse(chunkArr[i]);
        }
        else{
            result += rotate(chunkArr[i]);
        }
        }
    }

    return result;
}

function getSumOfCubesOfChunkDigits(chunk: string): number{
    let sum: number = 0;

    for (let i = 0; i < chunk.length; i++) {
        sum += Math.pow(parseInt(chunk[i]), 2);
    }

    return sum;
}

function reverse(chunk: string): string{
    return chunk.split("").reverse().join("");
}

function rotate(chunk: string): string{
    return chunk.substring(1) + chunk.substring(0,1);
}

export {solve};