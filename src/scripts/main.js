

// Add nice animation to the page when it loads
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    // document.querySelector('.hero_content_title span').classList.add('active');
    // for (let i = 0; i < document.querySelectorAll('.hero_content_subtitle span').length; i++) {
    //     document.querySelectorAll('.hero_content_subtitle span')[i].classList.add('active');
    // }
});

// opening and closing the mobile menu 
const menuBtn = document.getElementById('mobile_nav_opener');
const mobileMenu = document.querySelector('.mobile_nav_container');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Add animations to FAQ questions
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');

        // Get the corresponding answer element
        const answer = question.nextElementSibling;

        // Toggle the max-height property to show or hide the answer 
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});


// Add animated back to top button
document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.querySelector('.back_to_top');

    // Show back-to-top button when scrolling down
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top smoothly when the button is clicked
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});



// add slider 
const slider = document.querySelector('.courses');
const cardsContainer = document.querySelector('.courses_container');
const prevButton = document.querySelector('.prev__button');
const nextButton = document.querySelector('.next__button');

const cardWidth = cardsContainer.querySelector('.each_course').offsetWidth; // Width of a card
const cardsInView = 4; // Number of cards visible in the view

let currentPosition = 0;
let totalCards = cardsContainer.children.length;

prevButton.addEventListener('click', slideLeft);
nextButton.addEventListener('click', slideRight);

// Autoplay slider variables
let autoplayInterval;
const autoplayDelay = 5000; // Delay between slides in milliseconds

function startAutoplay() {
    autoplayInterval = setInterval(slideRight, autoplayDelay);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Start autoplay on page load
startAutoplay();

// Stop autoplay on mouseover
slider.addEventListener('mouseover', stopAutoplay);

// Restart autoplay on mouseout
slider.addEventListener('mouseout', startAutoplay);

function slideLeft() {
    currentPosition += cardWidth;
    if (currentPosition > 0) {
        currentPosition = -(totalCards - cardsInView) * cardWidth;
    }
    cardsContainer.style.transform = `translateX(${currentPosition}px)`;
}

function slideRight() {
    currentPosition -= cardWidth;
    if (currentPosition < -(totalCards - cardsInView) * cardWidth) {
        currentPosition = 0;
    }
    cardsContainer.style.transform = `translateX(${currentPosition}px)`;
}
