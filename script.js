function appendIntegers(event){
    display.innerHTML+=event.target.innerHTML;
}

function parser(a, b, oper){
    switch (oper) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '×':
            return a*b;
        case '/':
            return a/b
    
        default:
            break;
    }
}

function pushOperator(event){
    if (typeof operationStack[operationStack.length-1] == 'string' || (operationStack.length == 0 && display.innerHTML.length == 0)){
        return;
    }
    else{
        operationStack.push(parseFloat(display.innerHTML));
        operationStack.push(event.target.innerHTML);
        operatorSymbol.innerHTML = event.target.innerHTML;
        display.innerHTML = '';     
    }
}

let display = document.querySelector('#displayPane');
let keys = document.getElementsByClassName('keyStandard');
let operators = document.getElementsByClassName('operator');
let operatorSymbol = document.querySelector('#operatorSymbol');
let equals = document.getElementsByClassName('equals');
let integers = [];
for (i=0; i<10; i++){
    integers[i] = i;
}
operationStack=[];

for (i = 0; i<10; i++){
    keys[i].addEventListener('click', appendIntegers);
    
}

document.querySelector('#allClear').addEventListener('click', ()=>{
    display.innerHTML = '';
    operationStack.length = 0;
    operatorSymbol.innerHTML = '';
})

for (i = 0; i<operators.length; i++){
    operators[i].addEventListener('click', pushOperator);
    
}

equals[0].addEventListener('click', ()=>{
    operationStack.push(parseFloat(display.innerHTML));
    for (i = 0; i<operationStack.length; i+=2){
        if (i+2>= operationStack.length){
            break
        }
        else{
            result1 = parser(operationStack[i], operationStack[i+2], operationStack[i+1])
            operationStack.length = 0;
        }
    }
    display.innerHTML = result1;
})