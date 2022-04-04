let links = document.querySelector('.links')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let counter = document.querySelector('.zero')
let cartImg = document.querySelector('.cartImg')
let button = document.querySelector('.btnDiv')
let wares = document.querySelector('.wares')
let wareprice = document.querySelector('.wareprice')
let stories = document.querySelector('.stories')


minus.addEventListener('click', function () {
    minus = Number(counter.innerText--)
})

plus.addEventListener('click', function () {
    plus = Number(counter.innerText++)
})

button.addEventListener('click', function () {
    wares = wares.textContent;
    console.log(wares);
})

cartImg.addEventListener('click', function () {
    let sum = counter.textContent * wareprice.textContent
    console.log(sum);
})