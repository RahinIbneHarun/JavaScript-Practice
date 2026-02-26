function sumOfNumbers(numbers){
    let sum= 0;
    for(const number of numbers){
        sum=sum+number;
    }
    return sum;
}
const nums =[54,90,36,71];
const total = sumOfNumbers(nums);
console.log('Sum of number is', total)