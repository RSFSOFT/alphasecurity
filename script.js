document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.sponsor');
    let currentIndex = 0;

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].style.display = 'block';
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            slides[currentIndex].style.display = 'block';
        });
    }

    // Initialize the first slide
    if (slides.length > 0) {
        slides[currentIndex].style.display = 'block';
    }

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

            let menuOpen = navMenu.classList.contains("active");
            hamburger.setAttribute("aria-expanded", menuOpen);
        });
    }

    document.querySelectorAll(".nav-link").forEach(n => {
        n.addEventListener("click", () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    });
});
window.addEventListener('scroll', function() {
    var nonStickyMenu = document.querySelector('.non-sticky-menu');
    var stickyMenu = document.querySelector('.sticky-menu');
    var menuHeight = nonStickyMenu.offsetHeight;
    
    if (window.scrollY > menuHeight) {
        document.body.classList.add('sticky-active');
    } else {
        document.body.classList.remove('sticky-active');
    }
});
