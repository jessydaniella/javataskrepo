let decreaseButton = document.getElementById('decrease-button');
let resetButton = document.getElementById('reset-button');
let increaseButton = document.getElementById('increase-button');
let counter = document.getElementById('counter');
let count = 0;

decreaseButton.addEventListener('click', () =>{
    count --;
    counter.innerHTML = count;
    countercolor()
});
resetButton.addEventListener('click', () =>{
    count = 0
    counter.innerHTML = count;
    countercolor()
});
increaseButton.addEventListener('click', () =>{
    count ++;
    counter.innerHTML = count;
    countercolor()
});
function countercolor(){
    if (count < 0){
        counter.classList.add('counter-red');
    }
    else if (count> 0){
        counter.classList.add('counter-green');
    }
    else{
        counter.classList.remove('counter-red');
        counter.classList.remove('counter-green');
    }
    }
 
