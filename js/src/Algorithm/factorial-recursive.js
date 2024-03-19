function findFactorialRecusive(number){
    
    if(number === 2){
        return 2;
    }

    return number * findFactorialRecusive(number - 1)

    return answer;
}

console.log(findFactorialRecusive(5));