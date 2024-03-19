const basket = [3, 6, 31, 1, 5, 65, 2, 9]

let sortedBasket = basket.sort(function (a, b){
    return a - b;
});

console.log(sortedBasket);