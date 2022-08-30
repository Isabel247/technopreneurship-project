//back to top

let backToTopBtn = document.querySelector('.back-to-top')
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopBtn.style.display = 'flex'
    }else{
        backToTopBtn.style.display = 'none'
    }
}

// top nav menu

let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item , index) => {
    item.onclick = (e) => {
        let curMenu = document.querySelector('.menu-item.active')
        curMenu.classList.remove('active')
        item.classList.add('active')
    
    }
})


//product category

let prodList = document.querySelector('.product-item-wrap')

let prodCategory =  document.querySelector('.product-category')

let categories = prodCategory.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = prodCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        prodList.classList ='product-item-wrap '+ e.target.getAttribute('data-prod-type')
    }
})

// on screen animation
let scroll = window.requestAnimationFrame || function(callbcak) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0) 
        || 
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
    }
    
    loop = () => {
        elToShow.forEach((item, index) => {
            if(isElInViewPort(item)){
                item.classList.add('start')
            }else{
                item.classList.remove('start')
            }
        })
        scroll(loop)
    }
    loop()

