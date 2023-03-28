const body = document.getElementById('body')
const bgPattern = document.querySelector('.bg-pattern')
const headerTitle = document.querySelector('.header__title')
const generalOverviewCards = document.querySelectorAll('.generalOverview__card')
const generalOverviewAmounts = document.querySelectorAll('.generalOverview__amount')
const todayOverviewTitle = document.querySelector('.todayOverview__title')
const todayOverviewCards = document.querySelectorAll('.todayOverview__card')
const cardAmounts = document.querySelectorAll('.card__amount')

const darkmodeCheckbox = document.querySelector('.switch__input')

function toggleDarkmode(){
    body.classList.toggle('body--darktheme_bg')
    bgPattern.classList.toggle('bg-pattern--darktheme')
    headerTitle.classList.toggle('header__title--darktheme')
    todayOverviewTitle.classList.toggle('todayOverview__title--darktheme')
    
    generalOverviewCards.forEach(card=>card.classList.toggle('generalOverview__card--darktheme'))
    generalOverviewAmounts.forEach(amount=>amount.classList.toggle('generalOverview__amount--darktheme'))
    todayOverviewCards.forEach(card=>card.classList.toggle('todayOverview__card--darktheme'))
    cardAmounts.forEach(amount=>amount.classList.toggle('card__amount--darktheme'))
}

darkmodeCheckbox.addEventListener('click', ()=>{
    toggleDarkmode()
})
