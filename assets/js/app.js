const introLoader = document.getElementById("introLoader");
const introText = document.getElementById("introText");

const introMessages = [
    "Teachers spend too much time recording and encoding grades.",
    "Students wait too long to clearly see their academic standing.",
    "QITTACI deserves a faster, clearer, and more organized grading process."
];

const revealElements = document.querySelectorAll(".reveal");
const backToTop = document.getElementById("backToTop");
const menuToggle = document.getElementById("menuToggle");
const navWrap = document.getElementById("navWrap");

function runIntroSequence() {
    let currentIndex = 0;

    const switchMessage = () => {
        if (currentIndex < introMessages.length - 1) {
            introText.classList.add("fade-out");

            setTimeout(() => {
                currentIndex++;
                introText.textContent = introMessages[currentIndex];
                introText.classList.remove("fade-out");
                introText.classList.add("fade-in");

                setTimeout(() => {
                    introText.classList.remove("fade-in");
                }, 500);
            }, 550);
        } else {
            setTimeout(() => {
                introLoader.classList.add("hide");
                document.body.classList.add("intro-finished");
            }, 1200);
        }
    };

    setTimeout(() => {
        switchMessage();

        setTimeout(() => {
            switchMessage();

            setTimeout(() => {
                switchMessage();
            }, 3000);
        }, 3000);
    }, 2000);
}

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", () => {
    revealOnScroll();

    if (window.scrollY > 350) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

window.addEventListener("load", () => {
    revealOnScroll();
    runIntroSequence();
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navWrap.classList.toggle("open");
    });
}

document.querySelectorAll(".nav-links a, .btn-nav").forEach((link) => {
    link.addEventListener("click", () => {
        navWrap.classList.remove("open");
    });
});

document.addEventListener("click", (event) => {
    if (!navWrap || !menuToggle) return;

    const clickedInsideMenu = navWrap.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        navWrap.classList.remove("open");
    }
});