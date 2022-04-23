let links = document.querySelector('.links')
let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let counter = document.querySelector('.zero')
let cartImg = document.querySelector('.cartImg')
let button = document.querySelectorAll('.btnDiv')
let wareprice = document.querySelector('.wareprice')
let stories = document.querySelector('.stories')
let showcart = document.querySelector('.showCart')
let itemCount = document.querySelector('.itemCount')
let linkin = document.querySelectorAll('.linkin')
let itemSymbol = document.querySelector('.itemSymbol')
let checkout = document.querySelector('.checkout')
let price = document.querySelector('.price')
const cartTotal = document.querySelector('.cartTotal')
const emptyCart = document.querySelector('.emptyCart')

minus.addEventListener('click', function () {
    minus = Number(counter.innerText--)
})

plus.addEventListener('click', function () {
    plus = Number(counter.innerText++)
})

cartImg.addEventListener('click', () => {
        showcart.classList.toggle('showCartItem');
})


button.forEach((btn) => {
    const cartTotalSum = () => {
              const sumTotal = []
                const sum = document.querySelectorAll('.itemTotal')
               
                sum.forEach((item) => {
                    sumTotal.push(Number(item.innerText))
                })

                itemCount.innerText = sumTotal.length


                const grandTotal = sumTotal.reduce((total, item)=>{
                    total += item
                    return total
                }, 0)   
                
                document.querySelector('.cartTotal').innerText = grandTotal
      }

       let counting = Number(itemCount.innerText)

    btn.addEventListener('click', function (e) {

        if (e.target.parentElement.parentElement.parentElement.classList.contains('price')) {

            itemPrices = e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText
            // numOfItem = counter.innerText
            numOfItem = e.target.parentElement.previousElementSibling.children[1].innerText
            itemTotal = itemPrices * numOfItem
            // document.querySelector('.itemPrices').innerText = itemPrices
            // document.querySelector('.itemCount').innerText = numOfItem
            // document.querySelector('.itemTotal').innerText = itemTotal 
                
            if (e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.contains('stories')) {
                itemDetail = e.target.parentElement.parentElement.parentElement.previousElementSibling.children[1].innerText
                // document.querySelector('.carth4').innerText = itemDetail
            }

            if (e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.contains('productImg')) {
                productImg = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[1].children[0].src
                //   document.querySelector('.cartImage').src = productImg

            }else if (counting.length = 0) {
                const empty = document.createElement('h3')
                empty.classList.add('cart-items')
                empty.innerHTML = '<h3 class="emptyCart">Your cart list is empty</h3>'

                const cartInsert = document.querySelector('.cartInsert')
                cartInsert.insertBefore(empty, cartTotal)            
            }
                
        } 

      const cartItemList = {}

      cartItemList.Img = productImg 
      cartItemList.price =Number(itemPrices) 
      cartItemList.numOfItem =Number(numOfItem)
      cartItemList.total =Number(itemTotal)
      cartItemList.name = itemDetail

      console.log(cartItemList);

      const fullDetails = document.createElement('div')

      fullDetails.classList.add('cartDiv')

          fullDetails.innerHTML =  ` <img class="cartImage" src=${cartItemList.Img} alt="">
                        <div class="items">
                            <span class="carth4">${cartItemList.name}</span>
                            <div class="itemPrice">
                                <span class="itemPrices">${cartItemList.price}</span>
                                <span class="itemSymbol">*</span>
                                <span class="numOfItem">${cartItemList.numOfItem}</span>
                                <span class="itemTotal">${cartItemList.total}</span>
                            </div>
                        </div>
                    </div>`
      
      const cartInsert = document.querySelector('.cartInsert')

      cartInsert.insertBefore(fullDetails, cartTotal)
      
         cartTotalSum();   

    })
})  


