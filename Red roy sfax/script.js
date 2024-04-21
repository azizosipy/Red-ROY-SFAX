
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200) {
        document.querySelector('header').style.backgroundColor = "white"; 
    } else {
        document.querySelector('header').style.backgroundColor = "transparent"; 
    }
}
