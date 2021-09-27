
var progressBar = document.getElementById('progress-bar');
var container = document.getElementById('container');
var sectionOne = document.getElementById('sectionOne')
var sectionTwo = document.getElementById('sectionTwo')

var itemHolder = document.getElementById('item-holder');

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
  //supposingly to auto scroll to the top when refresh


window.addEventListener("scroll", onScroll);

function onScroll(evt) {
    // console.log("window.scrollY:", window.scrollY); //position of which the browser scroll is at
    // console.log("window height:", window.innerHeight); //browser height
    // console.log("container height:", container.scrollHeight);

    // console.log("sectionTwo offSetTop", sectionTwo.offsetTop);

    var currentWidth = window.scrollY/(container.scrollHeight - window.innerHeight) * 100;

    progressBar.style.width = currentWidth + '%'


    //sectiontwo
    // if (window.scrollY >= sectionTwo.offsetTop){
    //     console.log("You reach section 2");
    //     itemHolder.style.display = 'flex';
    // } else {
    //     console.log("You are above section 2");
    //     itemHolder.style.display = 'none';
    // }


    var itemList = document.querySelectorAll('.item');
    // console.log(itemList); //nodeList

    // if(window.scrollY + 300 >= itemList[0].offsetTop) {
    //     // itemList[0].classList.remove('fadeOut');
    //     itemList[0].classList.add('fadeIn');
    // }
    // if (window.scrollY + 300 >=itemList[1].offsetTop) {
    //     itemList[1].classList.add('fadeIn');
    // }
    // if (window.scrollY + 300 >=itemList[2].offsetTop) {
    //     itemList[2].classList.add('fadeIn');
    // }
    // if (window.scrollY + 300 >=itemList[3].offsetTop) {
    //     itemList[3].classList.add('fadeIn');
    // }

    for(var i = 0; i < itemList.length;i++) {
        if(window.scrollY + 300 >= itemList[i].offsetTop) {
            itemList[i].classList.add('fadeIn');
        }
    }
}

//