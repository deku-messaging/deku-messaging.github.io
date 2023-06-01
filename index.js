var storeButton = document.getElementById('playstore');
storeButton.style.backgroundColor = '#3c75ef';

//Global variables
var element;

//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("header").css("background-color","white") ;
        $("header").css("box-shadow","0px 8px 16px -6px black") ;
        $(".google_play").children("strong").hide("slow");
        $(".google_play").children("img").css("margin-right","5px");
    } else {
        $("header").css("background-color","transparent") ;
        $("header").css("box-shadow","0px 0px 0px 0px black") ;
        $(".google_play").children("strong").show("slow");
        $(".google_play").children("img").css("margin-right","10px");
    }
}


