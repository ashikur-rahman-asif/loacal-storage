const addProduct = () => {
    const productField= document.getElementById('product-name').value
    const quantityField = document.getElementById('product-quantity').value
    // productField.value = ''
    // quantityField.value=''
    console.log(productField,quantityField)
    showProduct(productField, quantityField)
    saveProductTOLocalStorage(productField, quantityField)
}
const showProduct = (productField, quantityField) => {
    const ul= document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${productField}: ${quantityField}`
    ul.appendChild(li)
}
const getSToredShoppingCart = () => {
    let  cart= {}
    const storedCard = localStorage.getItem('cart')
    if (storedCard) {
        cart= JSON.parse(storedCard)
    }
    return cart
}
const saveProductTOLocalStorage = (productField, quantityField) => {
    const cart = getSToredShoppingCart()
    cart[productField] = quantityField
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}

const displayProductsFromSLocalStorage = () => {
    const savedCart = getSToredShoppingCart()
    for (const product in savedCart) {
        // console.log(product)
        const quantity = savedCart[product]
        showProduct(product,quantity)
    }
    
}
displayProductsFromSLocalStorage()