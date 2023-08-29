

const backgroundChange = document.getElementById('background');
const imgslider=['slider1.jpg','slider2.jpg','slider3.jpg'];
var a = 0;
setInterval(function(){
    if ( a == 0 ){
        backgroundChange.style.backgroundImage = "url('slider1.jpg')";
        a = 1;
    }
    else if ( a == 1 ){
        backgroundChange.style.backgroundImage = "url('slider2.jpg')";
        a = 2;
    }
    else {
        backgroundChange.style.backgroundImage = "url('slider3.jpg')";
        a = 0;
    }
}, 2000);