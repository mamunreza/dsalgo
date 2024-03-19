function findFactorialIterative(number){
    let answer = 1;

    if(number === 2){
        return 2;
    }
    for (let i = 2; i <= number; i++){
        answer *= i;
    }

    return answer;
}

findFactorialIterative(5);