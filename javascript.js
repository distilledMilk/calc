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
            if(aO === 0) {  alert('CANNOT DIVIDE BY 0'); clearScreen(); return}
            value = divide(bO, aO);
            break;
        case 'x':
            value = multiply(bO, aO);
            break;
        default:
            value = mod(bO, aO);
            break;
    }
    document.querySelector('#calculations').value = `${b} ${operator} ${a}`
    const length = value.toString().length;
    if(length > 12){
        value = value.toExponential(2);   
    }

    if(typeof value === 'string' && value.includes('e')){
    const numValue = parseFloat(value);
    if(numValue.toString().length <= 12){
        value = numValue;
    }
}
    a = value;
    operator = '';
    b = '';
    console.log('did calculations: ' + value);
    screen = a + operator + b
    document.querySelector('#screen').value = `${value}`


}

let a = ''
let operator = '';
let b = '';
function appendNumber(num){
    if(a.length > 12) return;
    if(a === '' && num === '.') a+='0';
    a += num;
    document.querySelector('#screen').value = `${a}`;

}

function deleteNumber(){ 
    if(operator === ''){
        if(a === '') return;
    a = a.slice(0, -1);
    console.log("text after pop: " + a);
    document.querySelector('#screen').value = a;
    }
    else{
        operator = '';
        a = b;
        b = '';
        document.querySelector('#screen').value = a;
    }
    
}
function clearScreen(){
    a = '';
    operator = '';
    b = '';
    // screen = '';
    document.querySelector('#screen').value = '';
    document.querySelector('#calculations').value = '';
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
    // screen = a + operator + b
    // console.log("screen: " + screen);
    document.querySelector('#calculations').value = `${b} ${operator}`
    document.querySelector('#screen').value = '';
}
