// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#002147";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    } else {

        header.style.background = "#003366";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

let started = false;

function startCounters() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const speed = target / 120;

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerHTML = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerHTML = target + "+";

            }

        }

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100 && !started) {

        started = true;

        startCounters();

    }

});

// ===============================
// Back To Top
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Hero Fade Effect
// ===============================

const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    if (!heroContent) return;

    heroContent.style.opacity = 1 - window.scrollY / 700;

});

// ===============================
// Scroll Reveal
// ===============================

const reveals = document.querySelectorAll(

    ".card, .fleet-card, .destination-card, .testimonial"

);

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".7s";

});

function revealItems() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealItems);

revealItems();

// ===============================
// Active Navigation
// ===============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});