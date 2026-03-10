
const revealElements = document.querySelectorAll(".reveal");
const backToTop = document.getElementById("backToTop");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < triggerBottom) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", () => {
    revealOnScroll();

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

window.addEventListener("load", revealOnScroll);