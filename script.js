let menü= document.getElementById('menü');

let ulp = document.getElementById('navel')

let navul = document.getElementById('navi');

menü.addEventListener('click', () => {
    navul.classList.toggle('show')
    navel.classList.toggle('show')

})

navul.addEventListener('click', () => {
    navul.classList.toggle('show')
    navel.classList.toggle('show')

})

navel.addEventListener('click', () => {
    navul.classList.toggle('show')
    navel.classList.toggle('show')

})






let pfeil = document.querySelectorAll('.pfeil');

let  pImg = document.querySelectorAll('.p-img');

let gridBeschreibung = document.querySelectorAll('.grid-beschreibung');


for(let i = 0; i < pfeil.length; i++ ) {

pImg[i].addEventListener('mouseover', () => {
    pfeil[i].style.transition = '0.5s'
    pfeil[i].style.transform = 'rotate(0)'
    gridBeschreibung[i].style.gridTemplateRows = '1fr'
});
}

for(let i = 0; i < pfeil.length; i++ ) {
pImg[i].addEventListener('mouseout', () => {
    pfeil[i].style.transition = '0.5s'
    pfeil[i].style.transform = 'rotate(-90deg)'
    gridBeschreibung[i].style.gridTemplateRows = '0fr'
});
}
