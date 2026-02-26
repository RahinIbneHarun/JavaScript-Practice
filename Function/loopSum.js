function sumOfNumbers(numbers){
    let sum =0;
    for (const number of numbers){
        sum= sum+number;
        console.log(sum);
    }
}
const result = sumOfNumbers([12,89,51,0,33]);
console.log(result);