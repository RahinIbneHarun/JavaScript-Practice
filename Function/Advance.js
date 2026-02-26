function evenNumberSum(numbers){
    let sum=0;
    for (const number of numbers){
        if(number%2==0){
            sum=sum+number;
        }
    }
    return sum;
}
const nums=[54,13,1,6,99,138,26,55,17,74];
const total=evenNumberSum(nums);
console.log('sum of even number:', total)