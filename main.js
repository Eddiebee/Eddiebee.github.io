// selectors

let landingPage = document.querySelector('.landing-page');
let menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function () {
    landingPage.classList.toggle('menu-open');
});

// the tradeDisplay vanillas
let coinDisplayBtc = document.querySelector('.crypto-currency-btc');
let coinDisplayEther = document.querySelector('.crypto-currency-ether');

coinDisplayBtc.addEventListener('click', function () {
    landingPage.classList.toggle('displayBtc');
});

coinDisplayEther.addEventListener('click', function () {
    landingPage.classList.toggle('displayEther');
})


// the pop-up link JS

function displayPopUp() {
    let container = document.querySelector(".container")
    container.classList.add('displayPopUp');
}

// setTimer function JS
setTimeout('displayPopUp()', 10000);

// understanding most times come from continuous and active practice, which most peeps find stressful and without reward.
// .. yet it goes a very long way.






/*// JS For the Trade display
let showInfoBtc = document.querySelector('.crypto-currency-btc');
let showInfoEther = document.querySelector('.crypto-currency-ether');
let infoBtc = document.querySelector('.bitcoin-abt');
let infoEther = document.querySelector('.ethereum-abt');


showInfoBtc.addEventListener('click', function () {
    infoBtc.style.display = 'block';
});

showInfoEther.addEventListener('click', function () {
    infoEther.style.display = 'block';
});

 if (infoBtc.style.display = 'block') {
    infoEther.style.display = 'none';
} else if (infoEther.style.display = 'block') {
    infoBtc.style.display = 'none';
} */



//
// } else if(info.style.display = 'hide') {
//     showInfo.onclick = function () {
//         info.style.display = 'block';
//     };
// }



/*let getInfo = document.querySelector('.crypto-currency');
let displayInfo = document.querySelector('#bitcoin-abt');
let closeUp = document.querySelector('.btn');

getInfo.onclick = function displayOn() {
    displayInfo.style.display = 'block';
}

closeUp.onclick = function displayOff() {
    displayInfo.style.display = 'none';
}

 for (i = getInfo.onclick, getInfo.onclick == true, i++){
    if (getInfo.style.display == 'block') {
        getInfo.addEventListener('click', function displayOff() {
            displayInfo.style.display = 'none';
        });
    }
} */

//
// if (getInfo.onclick() == true) {
//
// }