function appendIntegers(event){
    event.target.style.boxShadow = '1px 1px';
    event.target.addEventListener('mouseup', (event)=>{
        event.target.style.boxShadow = '3px 3px';
    })
    if (display.innerHTML == '0.'){
        display.innerHTML+=event.target.innerHTML;
    }

    else if (parseFloat(display.innerHTML) == 0){
        display.innerHTML = '';
        display.innerHTML+=event.target.innerHTML;
    }
    else{
        display.innerHTML+=event.target.innerHTML;
    }
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
            return a/b;
        case '%':
            return (a/100)*b;
    
        default:
            break;
    }
}

function pushOperator(event){
    operationStack.push(parseFloat(display.innerHTML));
    operationStack.push(event.target.innerHTML);
    operatorSymbol.innerHTML = event.target.innerHTML;
    display.innerHTML = 0;
    event.target.style.boxShadow = '1px 1px';
    event.target.addEventListener('mouseup', (event)=>{
        event.target.style.boxShadow = '3px 3px';
    })
          
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
    keys[i].addEventListener('mousedown', appendIntegers);
    
}

document.querySelector('#allClear').addEventListener('mousedown', (event)=>{
    display.innerHTML = 0;
    operationStack.length = 0;
    operatorSymbol.innerHTML = '';
    event.target.style.boxShadow = '1px 1px';
    event.target.addEventListener('mouseup', (event)=>{
        event.target.style.boxShadow = '3px 3px';
    })
})

for (i = 0; i<operators.length; i++){
    operators[i].addEventListener('mousedown', pushOperator);
    
}

equals[0].addEventListener('mousedown', (event)=>{
    counter = 0;
    operationStack.push(parseFloat(display.innerHTML));
    operatorSymbol.innerHTML = '';

    for (i = 0; i<operationStack.length; i++){
        if (typeof operationStack[i] == 'string'){
            counter = counter+1;
        }
    }

    while (counter!=0){
        for (i = 0; i<operationStack.length; i++){
            if (typeof operationStack[i] == 'string'){
                if (operationStack[i+1] == 0 && operationStack[i] == '/'){
                    display.style.fontSize = '30px';
                    display.innerHTML = 'We don\'t do that here.';
                    return;
                }
                else{
                    let result = parser(operationStack[i-1], operationStack[i+1], operationStack[i]);
                    operationStack.splice(i-1, i+2);
                    operationStack.unshift(result);
                break;
                }
            }
        }
        counter = counter-1;
    }
    display.innerHTML = operationStack[0].toFixed(3);
    operationStack.length = 0;
    event.target.style.boxShadow = '1px 1px rgb(130, 204, 20)';
    event.target.addEventListener('mouseup', (event)=>{
        event.target.style.boxShadow = '3px 3px rgb(130, 204, 20)';
    })
})

document.getElementsByClassName('decimal')[0].addEventListener('mousedown', (event)=>{
    display.innerHTML+='.';
    event.target.style.boxShadow = '1px 1px';
    event.target.addEventListener('mouseup', (event)=>{
        event.target.style.boxShadow = '3px 3px';
    })
    
})