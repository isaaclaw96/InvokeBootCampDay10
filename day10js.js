var progressBar = document.getElementById('progress-bar');
var container = document.getElementById('container');
var sectionList = document.querySelectorAll('.section');
// console.log(sectionList);

var sectionOne = document.getElementById('sectionOne');
var layerOne = document.getElementById('layerOne');
var layerTwo = document.getElementById('layerTwo');
var layerThree = document.getElementById('layerThree');
var layerFour = document.getElementById('layerFour');
var layerFive = document.getElementById('layerFive');
var layerSix = document.getElementById('layerSix');


var sectionTwo = document.getElementById('sectionTwo');
var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');
var imageFour = document.getElementById('imageFour');
var imageFive = document.getElementById('imageFive');
var imageSix = document.getElementById('imageSix');
var imageSeven = document.getElementById('imageSeven');

var containerPos = {w:1000, h: 0};
var sectionOnePos = {w:1000, h: 100};
var layerOnePos = {x:0, y:0, w:1000, h: 100};
var layerTwoPos = {x:-300, y:0, w:1000, h: 100};
var layerThreePos = {x:-300, y:0, w:1000, h: 100};
var layerFourPos = {x:-300, y:0, w:1000, h: 100};
var layerFivePos = {x:0, y:0, w:1000, h: 100};
var layerSixPos = {x:0, y:0, w:1000, h: 100};
var mouse = {x:0, y:0};

var sectionTwoPos = {w:1500, h: 100};
var imageOnePos = {x:0, y:0, w:1000, h: 100};
var imageTwoPos = {x:0, y:0, w:1000, h: 100};
var imageThreePos = {x:0, y:0, w:1000, h: 100};
var imageFourPos = {x:0, y:0, w:1000, h: 100};
var imageFivePos = {x:0, y:0, w:1000, h: 100};
var imageSixPos = {x:0, y:0, w:1000, h: 100};
var imageSevenPos = {x:0, y:0, w:1000, h: 100};

// window.onbeforeunload = function() {
//     window.scrollTo(0,0);
// }
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('scroll', onScroll);

for(var i = 0; i < sectionList.length; i++) {
    if(window.scrollY + 100>= sectionList[i].offsetTop) {
        sectionList[i].classList.add('fadeIn');
        sectionTwo.style.backgroundImage = 'url("day10_challenge/fireworks.gif")';
    }
}

function onScroll (evt){
    var currentWidth = window.scrollY/(container.scrollHeight - window.innerHeight) * 100;

    progressBar.style.width = currentWidth + '%';
}

function onMouseMove(evt) {
    // console.log(evt);
    var mouse = {x:evt.pageX - container.offsetLeft, y: evt.pageY - container.offsetTop};

    layerOnePos.x = (-mouse.x*0.01) + (sectionOnePos.w/2 - layerOnePos.w/2);
    layerOne.style.left = layerOnePos.x + 'px';
    layerTwoPos.x = (-mouse.x*0.03) + (sectionOnePos.w/2 - layerTwoPos.w/1.2);
    layerTwo.style.left = layerTwoPos.x + 'px';
    layerThreePos.x = (-mouse.x*0.05) + (sectionOnePos.w/2 - layerThreePos.w/1.2);
    layerThree.style.left = layerThreePos.x + 'px';
    layerFourPos.x = (-mouse.x*0.06) + (sectionOnePos.w/2 - layerFourPos.w/1.2);
    layerFour.style.left = layerFourPos.x + 'px';
    layerFivePos.x = (mouse.x*0.08) + (sectionOnePos.w/2 - (layerFivePos.w/1.2));
    layerFive.style.left = layerFivePos.x + 'px';
    
    imageOnePos.x = (-mouse.x*0.01) + (sectionTwoPos.w/2 - imageOnePos.w/1.2);
    imageOne.style.left = imageOnePos.x + 'px';
    imageTwoPos.x = (-mouse.x*0.03) + (sectionTwoPos.w/2 - imageTwoPos.w/1.2);
    imageTwo.style.left = imageTwoPos.x + 'px';
    imageThreePos.x = (-mouse.x*0.05) + (sectionTwoPos.w/2 - imageThreePos.w/1.2);
    imageThree.style.left = imageThreePos.x + 'px';
    imageFourPos.x = (-mouse.x*0.06) + (sectionTwoPos.w/2 - imageFourPos.w/1.2);
    imageFour.style.left = imageFourPos.x + 'px';
    imageFivePos.x = (-mouse.x*0.08) + (sectionTwoPos.w/2 - imageFivePos.w/1.2);
    imageFive.style.left = imageFivePos.x + 'px';
    imageSixPos.x = (-mouse.x*0.05) + (sectionTwoPos.w/2 - imageSixPos.w/1.2);
    imageSix.style.left = imageSixPos.x + 'px';
    imageSevenPos.x = (-mouse.x*0.06) + (sectionTwoPos.w/2 - imageSevenPos.w/1.2);
    imageSeven.style.left = imageSevenPos.x + 'px';
}


