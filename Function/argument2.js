function addNumbers(){
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;  
    }
    console.log(sum);
}
addNumbers(5,6); 

