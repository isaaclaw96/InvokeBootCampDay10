var onion = document.getElementById('onion');
var container = document.getElementById('container');
var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');

var containerPos = {w: 512, h: 512};
var onionPos = {x: 0,y: 0,w: 50,h: 50};
var layerOnePos = {x:0, y:0, w:1000, h:512};
var layerTwoPos = {x:0, y:0, w:1000, h:512};
var layerThreePos = {x:0, y:0, w:1000, h:512};
var mouse = {x:0,y:0};

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(evt){
    console.log(evt);
    var mouse = {x: evt.pageX- container.offsetLeft, y: evt.pageY - container.offsetTop};
    console.log(`x: ${mouse.x}, y: ${mouse.y}`);

    onionPos.x = mouse.x - onionPos.w / 2;

    onionPos.y = mouse.y - onionPos.h / 2;

    onion.style.left = onionPos.x + 'px';
    onion.style.top = onionPos.y + 'px';

    // onion.style.left = mouse.x - container.offsetLeft + 'px';
    // onion.style.top = mouse.y - container.offsetTop +'px';

    //var onionLeft = mouse.x - 25 - container.offsetLeft;
    //var onionTop = mouse.y - 25 - container.offsetTop;
    //onion.style.left = onionLeft + 'px';
    //onion.style.top = onionTop + 'px';

    layerOnePos.x = (-mouse.x*0.05) + (containerPos.w/2 - layerOnePos.w/2); //to find the center of the screen
    layerOne.style.left = layerOnePos.x + 'px' ;

    layerOnePos.y = (-mouse.y*0.05) + (containerPos.h/2 - layerOnePos.h/2);
    layerOne.style.top = layerOnePos.y + 'px' ;

    layerTwoPos.x = (-mouse.x*0.03) + (containerPos.w/2 - layerTwoPos.w/2);
    layerTwo.style.left = layerTwoPos.x + 'px' ;

    layerThreePos.x = (-mouse.x*0.01) + (containerPos.w/2 - layerThreePos.w/2);
    layerThree.style.left = layerThreePos.x + 'px' ;

}

// layersix highest define container width with image size create a landing page, got two containers for two sections. build parallax.






// the foreground is the fastest, midground is slow, background is wayyy slower, to create the parallax effect