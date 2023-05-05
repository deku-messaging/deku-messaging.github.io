var storeButton = document.getElementById('playstore');
storeButton.style.backgroundColor = 'white';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 100) {
        storeButton.style.backgroundColor = 'white';
    } else if (scroll >= 100 && scroll < 400) {
        storeButton.style.backgroundColor = 'orange';
    } else if (scroll >= 400 && scroll < 1200) {
        storeButton.style.backgroundColor = 'orange';
} 
    }
