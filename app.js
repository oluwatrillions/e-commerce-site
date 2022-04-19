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
let itemSymbol = document.querySelector('.itemSymbol')
let checkout = document.querySelector('.checkout')
let cartCount = document.querySelector('.cartCount')

minus.addEventListener('click', function () {
    minus = Number(counter.innerText--)
})

plus.addEventListener('click', function () {
    minus = Number(counter.innerText++)
})

button.addEventListener('click', function () {
  showcart.classList.toggle('showCartItem')
    itemPrices = wareprice.innerText
    numOfItem = counter.innerText
    itemTotal = itemPrices * numOfItem
    document.querySelector('.itemPrices').innerText = itemPrices
    document.querySelector('.numOfItem').innerText = numOfItem
    document.querySelector('.itemTotal').innerText = itemTotal
})

linkin.forEach((e) => {
    e.addEventListener('click', (e) => {
        let linkTarget = e.currentTarget
        linkTarget.style.color = 'red';
    })
})

checkout.addEventListener('click', () => {
  
})

