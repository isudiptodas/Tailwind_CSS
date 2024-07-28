let loginWindow = document.querySelector("#login-window");
let loginWindowCross = document.querySelector("#login-window-cross");
let userIcon = document.querySelector("#user-icon");
let blackFriday = document.querySelector("#black-friday");
let code = document.querySelector("#code");
let edge = document.querySelector("#edge");
let isVisible = false;

userIcon.addEventListener("click", ()=>{
    if(isVisible==false){
        loginWindow.style.visibility = "visible";
        gsap.from(loginWindow, {
            opacity: 0,
            y: '-100vh',
            duration:0.5
        });
        isVisible = true;
    }
});

loginWindowCross.addEventListener("click", ()=>{
    if(isVisible==true){
        gsap.to(loginWindow, {
            opacity: 0,
            y: '-100vh',
            opacity: 0,
            duration:0.5,
            onComplete: ()=>{
                loginWindow.style.visibility = "hidden";
            }
        });
        isVisible = false;
    }
});

gsap.to(blackFriday, {
    opacity: 0, 
    duration: 0.8,
    repeat: -1,
    yoyo: true
});
