var MyButton = document.getElementById("goup");
var head = document.getElementById("header");


window.onscroll = function () {

    'use strict';

    if (window.pageYOffset >= 400) {
        MyButton.style.display='block'
    } else {
        MyButton.style.display='none'
    }

    // if(window.pageYOffset >=100) {
    //     head.classList.add("fixedheader")
    // } else{
    //     head.classList.remove("fixedheader")
    // }
    
};

MyButton.onclick = function(){
    'use strict';
    window.scrollTo(0,0)
};

