function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    switch(operator){
        case '-':
            subtract(a, b);
            break;
        case '+':
            add(a,b);
            break;
        case '/':
            divide(a,b);
            break;
        default:
            multiply(a,b);
    }
}


console.log(subtract(1,3));
console.log(add(1,3));
console.log(multiply(1,3));
console.log(divide(1,3));
