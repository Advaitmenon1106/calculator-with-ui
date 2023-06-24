function appendIntegers(event){
    display.innerHTML+=event.target.innerHTML;
}

let display = document.querySelector('#displayPane');
let keys = document.getElementsByClassName('keyStandard');
let integers = [];
for (i=0; i<10; i++){
    integers[i] = i;
}

operationStack=[];

for (i = 0; i<10; i++){
    keys[i].addEventListener('click', appendIntegers);
    
}

document.querySelector('#allClear').addEventListener('click', ()=>{
    display.innerHTML = ''
})