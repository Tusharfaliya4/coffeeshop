let navbar = document.querySelector('.navbar')


document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active')
    cartitem.classList.remove('active')
    searchform.classList.remove('active')
}

let cartitem = document.querySelector('.cart-item-container')

document.querySelector('#cart-btn').onclick = ()=>{
    cartitem.classList.toggle('active')
    navbar.classList.remove('active')
    searchform.classList.remove('active')
}

let searchform = document.querySelector('.serach-form')

document.querySelector('#search-btn').onclick = ()=>{
    searchform.classList.toggle('active')
    navbar.classList.remove('active')
    cartitem.classList.remove('active')
}
    

window.onscroll=()=>{
       navbar.classList.remove('active')
       cartitem.classList.remove('active')
       searchform.classList.remove('active')
}