let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu. addEventListener("click", function() {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
}


//UpScrolling arrow

const upArrow = document.querySelector("#uparrow");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        upArrow.classList.add("active-btn")
    } else{
        upArrow.classList.remove("active-btn")
    }
})


