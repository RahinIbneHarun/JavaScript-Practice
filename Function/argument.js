function addNumber(a,b){
    console.log(arguments);
    return a+b;
}

const result = addNumber(5,8,78,345);
console.log(result);