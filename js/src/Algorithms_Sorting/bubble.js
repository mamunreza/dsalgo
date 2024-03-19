const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    let iterate;

    do {
        iterate = false;
        // console.log(iterate);
        for (let i = 0; i < array.length; i++) {
            let temp = 0;
            if(array[i] > array[i+1]){
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                iterate = true;
            }
        }

        console.log(iterate);
        
    } while (iterate);

}

console.log(numbers.toString());
bubbleSort(numbers);
console.log(numbers.toString());