let links = document.querySelector('.links')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let counter = document.querySelector('.zero')
let cartImg = document.querySelector('.cartImg')
let button = document.querySelector('.btnDiv')
let wares = document.querySelector('.wares')
let wareprice = document.querySelector('.wareprice')
let stories = document.querySelector('.stories')
let showcart = document.querySelector('.showCart')
let itemCount = document.querySelector('.itemCount')
let linkin = document.querySelectorAll('.linkin')
let itemPrices = document.querySelector('.itemPrices').innerText
let itemSymbol = document.querySelector('.itemSymbol')
let numOfItem = document.querySelector('.numOfItem').innerText
let itemTotal = document.querySelector('.itemTotal').innerText
let checkout = document.querySelector('.checkout')


minus.addEventListener('click', function () {
    minus = Number(counter.innerText--)
})

plus.addEventListener('click', function () {
    plus = Number(counter.innerText++)
})

button.addEventListener('click', function () {
    wares = counter.textContent;
    itemCount.textContent = wares
})

cartImg.addEventListener('click', function () {
   showcart.classList.toggle('showCartItem')
})

linkin.forEach((e) => {
    e.addEventListener('click', (e) => {
        let linkTarget = e.currentTarget
        linkTarget.style.color = 'red';
    })
})

checkout.addEventListener('click', () => {
    itemPrices = Number(itemPrices)
    numOfItem = Number(numOfItem)
    document.querySelector('.itemTotal').innerText = itemPrices * numOfItem
    console.log(itemTotal);
    console.log(itemPrices);
    console.log(numOfItem);
})

