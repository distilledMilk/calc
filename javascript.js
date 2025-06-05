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

function mod(a,b){
    return a%b;
}

function operate(){
    if(a === '' || b === '') return;
    console.log(`A at start of operation: ${a} B at start of operation ${b} operator start of operation: ${operator}`);
    let aO = parseFloat(a);
    let bO = parseFloat(b);
    let value = '';
    switch(operator){
        case '-':
             value = subtract(bO, aO);
             break;
        case '+':
            value = add(bO, aO);
            break;
        case '/':
            value = divide(bO, aO);
            break;
        case 'x':
            value = multiply(bO, aO);
            break;
        default:
            value = mod(bO, aO);
            break;
    }
    a = value;
    operator = '';
    b = '';
    console.log('did calculations: ' + value);
    
    document.querySelector('#screen').value = `${value}`


}

let a = ''
let operator = '';
let b = '';
let length = document.querySelector('#screen').value.length;
function appendNumber(num){
    if(a.length > 10) return;
    console.log("Length: " + length);
    a += num;
    document.querySelector('#screen').value = `${b} ${operator} ${a}`;
}

function deleteNumber(){ 
    a = a.slice(0, -1);
    console.log("text after pop: " + a);
    document.querySelector('#screen').value = a;
}
function clearScreen(){
    a = '';
    operator = '';
    b = '';
    document.querySelector('#screen').value = '';
}

function appendOperator(aOperator){
    if(a === ''){ console.log('met here'); return};

    if(b != ''){
        console.log('b is not empty');
        console.log('b:' + b);
        operate();
        // document.querySelector('#screen').value = `${a}`
        // return;
    }
    console.log('a: ' + a);

    operator = aOperator; 
    console.log('operator: ' + operator);
    b = a;
    console.log('b: ' + b);
    a = '';
    console.log('a: ' + a);
    document.querySelector('#screen').value = `${b} ${operator}`;
}
