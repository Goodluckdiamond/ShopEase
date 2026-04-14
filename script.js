
const menuBtn = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu")
menuBtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
})
// fix reset menu on resize
window.addEventListener("resize", () => {
    if(window.innerWidth >= 768) {
        menu.classList.add("hidden");
    }
})




mediumZoom('.zoomable', {
  margin: 10,
  background: 'rgba(0,0,0,0.8)'
});

