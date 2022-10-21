function solve(str: string): boolean{
    str = sortLetters(str);
    
    return isPalindrome(str);
};

function sortLetters(str: string): string{
    let arr: string[] = str.split("");
    arr = arr.sort();
    return arr.join("");
}

function isPalindrome(str: string): boolean{
    let countOfSingleLetters: number = 0;

    for (let i = 0; i < str.length;) {
        if(countOfSingleLetters > 1){
            return false;
        }

        if(str[i] == str[i + 1]){
            i += 2;
        }
        else{
            countOfSingleLetters++;
            i++;
        }
    }

    if(countOfSingleLetters > 1){
        return false;
    }
    else{
        return true;
    }
}

export {solve};