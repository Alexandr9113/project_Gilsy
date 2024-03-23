// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));

// Slider
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slider-image");
const pagination = document.getElementById("pagination");

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    pagination.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * slider.clientWidth}px)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

setInterval(() => {
  nextSlide()
}, 5000);

addPagination();

//Review slider
const reviewsSlider = document.getElementById("reviews-slider");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const reviews = document.querySelectorAll(".user-reviews");

let currentReviewIndex = 0;

function showReviews() {
    reviewsSlider.style.transform = `translateX(-${currentReviewIndex * reviewsSlider.clientWidth}px)`;
}

function changeReview(reviewsSliderIndex) {
    currentReviewIndex = reviewsSliderIndex;
    showReviews();
}

function nextReview() {
    let newReviewIndex = currentReviewIndex + 1;
    if(newReviewIndex > reviews.length - 1) {
        newReviewIndex = 0;
    }
    changeReview(newReviewIndex);
}

function prevReview() {
    let newReviewIndex = currentReviewIndex - 1;
    if(newReviewIndex < 0) {
        newReviewIndex = reviews.length - 1;
    }
    changeReview(newReviewIndex);
}

arrowLeft.addEventListener("click", prevReview);
arrowRight.addEventListener("click", nextReview);