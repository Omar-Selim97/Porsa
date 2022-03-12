//1-scroll navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});
//2-
const h = document.querySelector(".headlineAsk");
const text = "أسئلة شائعة ...FAQ ";

let index = 0;

function typeing() {
    index += 1;
    h.textContent = text.slice(0, index);
    if (index >= 22) {
        index = 0;
    }
}
setInterval(() => typeing(), 300);
//3-Reveal scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var doscroll = document.querySelectorAll('.reveal');
    for (let i = 0; i < doscroll.length; i++) {
        let windowH = window.innerHeight;
        let scrollTop = doscroll[i].getBoundingClientRect().top;
        var scrollPoint = 150;
        if (scrollTop < windowH - scrollPoint) {
            doscroll[i].classList.add('scroll');
        } else {
            doscroll[i].classList.remove('scroll');
        }
    }
}
// 4-Ask
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}