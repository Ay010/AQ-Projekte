
// Menü Button

let menü= document.getElementById('menü');

let ulp = document.getElementById('navel')

let navul = document.getElementById('navi');

menü.addEventListener('click', () => {
    navul.classList.toggle('show')
    ulp.classList.toggle('show')

})

navul.addEventListener('click', () => {
    navul.classList.toggle('show')
    ulp.classList.toggle('show')

})

navel.addEventListener('click', () => {
    navul.classList.toggle('show')
    ulp.classList.toggle('show')

})




// Projekte

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






// Info

let aktivInfo = document.querySelectorAll('.aktiv-info')

let infoContent = document.querySelectorAll('.grid-info');

let infoPfeil = document.querySelectorAll('.info-pfeil')

let counter = 0;

for(let i = 0; i < aktivInfo.length; i++ ) {

        aktivInfo[i].addEventListener('click', () => {

            if(counter === 0) {

        infoPfeil[i].style.transition = '0.5s'
        infoPfeil[i].style.transform = 'rotate(0)'
        infoContent[i].style.gridTemplateRows = '1fr'

        counter = 1

    } else if(counter === 1) {

        infoPfeil[i].style.transition = '0.5s'
        infoPfeil[i].style.transform = 'rotate(-90deg)'
        infoContent[i].style.gridTemplateRows = '0fr'

        counter = 0

    }
    });

    }

// if( counter === 0 ) {

//     counter = 1;

// for(let i = 0; i < aktivInfo.length; i++ ) {
//     aktivInfo[i].addEventListener('click', () => {

//     infoPfeil[i].style.transition = '0.5s'
//     infoPfeil[i].style.transform = 'rotate(0)'
//     infoContent[i].style.gridTemplateRows = '1fr'
// });
// }
// };

// if(counter === 1) {

//     counter = 0;

// for(let i = 0; i < aktivInfo.length; i++ ) {
//     aktivInfo[i].addEventListener('click', () => {

//         infoPfeil[i].style.transition = '0.5s'
//         infoPfeil[i].style.transform = 'rotate(-90deg)'
//         infoContent[i].style.gridTemplateRows = '0fr'
// });
// }
// }