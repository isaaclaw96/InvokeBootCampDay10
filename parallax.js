var onion = document.getElementById('onion');
var container = document.getElementById('container');

var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");

var containerPos = {w: 1000, h: 512};
var onionPos = {x: 0, y: 0, w: 50, h: 50};
var layerOnePos = {x: 0, y: 0, w:1000, h: 512}
var layerTwoPos = {x: 0, y: 0, w: 1000, h: 512}
var layerThreePos = {x: 0, y: 0, w: 1000, h: 512}
var mouse = {x: 0, y:0}


window.addEventListener("mousemove", onMouseMove);
function onMouseMove(evt) {
    // console.log(evt);
    mouse.x=  evt.pageX - container.offsetLeft;
    mouse.y = evt.pageY - container.offsetTop;

    // var onionLeft = mouse.x - 25 - container.offsetLeft;
    // var onionTop = mouse.y - 25 - container.offsetTop;
    // onionPos.x = mouse.x - onionPos.w / 2;
    // onionPos.y = mouse.y - onionPos.h / 2 ;

    // onion.style.left =  onionPos.x + 'px';
    // onion.style.top = onionPos.y + 'px';

    layerOnePos.x = (-mouse.x* 0.08) + (containerPos.w/2 - layerOnePos.w / 2) ;
    layerOne.style.left = layerOnePos.x + 'px';

    layerOnePos.y = (-mouse.y*0.05) + (containerPos.h / 2 - layerOnePos.h / 2)  ;
    layerOne.style.top = layerOnePos.y + 'px';

    layerTwoPos.x = (-mouse.x* 0.03) + (containerPos.w/2 - layerTwoPos.w / 2) ;
    layerTwo.style.left = layerTwoPos.x + 'px';

    layerThreePos.x = (-mouse.x* 0.006) + (containerPos.w/2 - layerThreePos.w / 2) ;
    layerThree.style.left = layerThreePos.x + 'px';
}

setInterval(function() {
    onionPos.x += (mouse.x - onionPos.x) / 12;
    onionPos.y += (mouse.y - onionPos.y) / 12;

    onion.style.left = onionPos.x + 'px';
    onion.style.top = onionPos.y + 'px';
}, 30) //to make the object follow
// keep track the current sun.x value 
// when  mouse x increase. sun.x = sunx. + mouse.x