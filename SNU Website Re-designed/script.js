let modeOut = document.querySelector("#mode-outer");
let modeIn = document.querySelector("#mode-inner");
let leftFade = document.querySelector("#left-fade");
let rightFade = document.querySelector("#right-fade");
let leftArrow = document.querySelector("#left-arrow");
let rightArrow = document.querySelector("#right-arrow");
let page3Bg = document.querySelector("#page-3-bg");
let welcome = document.querySelector("#welcome");
let description = document.querySelector("#description");
let body = document.querySelector("#body");
let notices = document.querySelector("#notices");
let exploreSchool = document.querySelector("#explore-school");
let offerOuter = document.querySelector("#offer-outer");
let offerInner = document.querySelector("#offer-inner");
let followOuter = document.querySelector("#follow-outer");
let followInner = document.querySelector("#follow-inner");
let lastRightFade = document.querySelector("#last-right-fade");
let lastLeftFade = document.querySelector("#last-left-fade");
let lastRightArrow = document.querySelector("#last-right-arrow");
let lastLeftArrow = document.querySelector("#last-left-arrow");
let navElem = document.querySelectorAll("#nav-elem a");
let heading = document.querySelectorAll("#heading h1");
let sliderImages = document.querySelectorAll("#slider img");

let isDarkMode = false;

//Dark mode feature

function darkMode(){
    body.style.backgroundColor = 'black';
        modeOut.style.justifyContent = 'end';
        modeOut.style.backgroundColor = 'black';
        modeIn.style.backgroundColor = 'yellow';
        modeIn.style.transition = '0.7s ease';
        modeOut.style.transition = '0.7s ease';
        leftArrow.style.color = 'white';
        rightArrow.style.color = 'white';
        leftFade.style.background = 'linear-gradient(to right, black, transparent)';
        rightFade.style.background = 'linear-gradient(to left, black, transparent)';
        page3Bg.style.backgroundColor = 'black';
        welcome.style.color = 'white';
        description.style.color = 'white';
        notices.style.color = 'white';
        exploreSchool.style.color = 'white';
        offerOuter.style.backgroundColor = 'black';
        offerInner.style.color = 'white'; 
        followOuter.style.backgroundColor = 'black';
        followInner.style.color = 'white';
        lastLeftFade.style.background = 'linear-gradient(to right, black, transparent)';
        lastRightFade.style.background = 'linear-gradient(to left, black, transparent)';
        lastLeftArrow.style.color = 'white';
        lastRightArrow.style.color = 'white';
}

function lightMode(){
    body.style.backgroundColor = 'white';
        modeOut.style.justifyContent = 'start';
        modeOut.style.backgroundColor = 'white';
        modeIn.style.backgroundColor = 'black';
        modeIn.style.transition = '0.7s ease';
        modeOut.style.transition = '0.7s ease';
        leftArrow.style.color = 'black';
        rightArrow.style.color = 'black';
        leftFade.style.background = 'linear-gradient(to right, white, transparent)';
        rightFade.style.background = 'linear-gradient(to left, white, transparent)';
        page3Bg.style.backgroundColor = 'white';
        welcome.style.color = 'black';
        description.style.color = 'black';
        notices.style.color = 'black';
        exploreSchool.style.color = 'black';
        offerOuter.style.backgroundColor = 'white';
        offerInner.style.color = 'black'; 
        followOuter.style.backgroundColor = 'white';
        followInner.style.color = 'black';
        lastLeftFade.style.background = 'linear-gradient(to right, white, transparent)';
        lastRightFade.style.background = 'linear-gradient(to left, white, transparent)';
        lastLeftArrow.style.color = 'black';
        lastRightArrow.style.color = 'black';
}

modeOut.addEventListener("click", () => {
    if(isDarkMode == false){
        isDarkMode = true;
        darkMode();
    }
    else{
        isDarkMode = false;
        lightMode();
    }
}); 

let tl = gsap.timeline();

tl.from(navElem, {
    opacity: 0,
    y : -100,
    stagger : 0.2,
    delay: 0.3,
    duration: 0.6
});

tl.from(heading, {
    opacity: 0,
    y: 100,
    stagger: 0.2
});


gsap.to(sliderImages, {
    x: '-100%',
    duration: 10,
    repeat: -1,
    ease: 'none'
});