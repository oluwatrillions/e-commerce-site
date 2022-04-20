let links = document.querySelector('.links')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let counter = document.querySelector('.zero')
let cartImg = document.querySelector('.cartImg')
let button = document.querySelectorAll('.btnDiv')
let itemDetails = document.querySelector('.itemDetail')
let wareprice = document.querySelector('.wareprice')
let stories = document.querySelector('.stories')
let showcart = document.querySelector('.showCart')
let itemCount = document.querySelector('.itemCount')
let linkin = document.querySelectorAll('.linkin')
let itemSymbol = document.querySelector('.itemSymbol')
let checkout = document.querySelector('.checkout')
let price = document.querySelector('.price')

linkin.forEach((link) => {
    link.addEventListener('click', (e) => {
        linkin.classList.add('linkDecor')
    })
})

minus.addEventListener('click', function () {
    minus = Number(counter.innerText--)
})

plus.addEventListener('click', function () {
    plus = Number(counter.innerText++)
})


button.forEach((btn) => {

  btn.addEventListener('click', function (e) {
    showcart.classList.toggle('showCartItem');
        console.log(e.target);

        if (e.target.parentElement.parentElement.parentElement.classList.contains('price')){
            console.log(e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText);
        }
        
    itemDetail = itemDetails.innerText
    itemPrices = wareprice.innerText
    numOfItem = counter.innerText
    itemTotal = itemPrices * numOfItem
    document.querySelector('.carth4').innerText = itemDetail
    document.querySelector('.itemPrices').innerText = itemPrices
    document.querySelector('.numOfItem').innerText = numOfItem
    document.querySelector('.itemTotal').innerText = itemTotal 
})

})

linkin.forEach((e) => {
    e.addEventListener('click', (e) => {
        let linkTarget = e.currentTarget
        linkTarget.style.color = 'red';
    })
})

checkout.addEventListener('click', () => {
  
})

const cartList = () => {
    const cartItemList = {}



}

