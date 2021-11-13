let count = 0;
let result = document.getElementById('result')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const reset = document.getElementById('reset')


plus.addEventListener('click', () => {
    count++;

    result.innerText = count
        
})

minus.addEventListener('click', () => {
    count--;

    result.innerText = count
})

reset.addEventListener('click', () => {
    count = 0;

    result.innerText = count
})




