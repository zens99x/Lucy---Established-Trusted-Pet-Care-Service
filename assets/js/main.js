// ====================== Navbar =========================//
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy tabs
const navbar_tabs = $$(".navbar__tab");
const navbar_active = $(".navbar__tab.navbar__tab--active");

// Gắn sự kiện click
navbar_tabs.forEach((tab) => {
    tab.onclick = function () {
        $(".navbar__tab.navbar__tab--active").classList.remove(
            "navbar__tab--active"
        );
        this.classList.add("navbar__tab--active");
    };
});

// ====================== Feature =========================//

// Lấy tabs
const feature_tabs = $$(".tab__item");
const feature_pane = $$(".tab__pane");
const feature_active = $(".tab__item.tab__item--active");

// Gắn sự kiện click
feature_tabs.forEach((tab, index) => {
    tab.onclick = function () {
        const content = feature_pane[index];
        console.log(content);
        $(".tab__item.tab__item--active").classList.remove("tab__item--active");
        $(".tab__pane.tab__pane--active").classList.remove("tab__pane--active");

        content.classList.add("tab__pane--active");
        this.classList.add("tab__item--active");
    };
});

//================================ Review slide ====================================== //
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    console.log(n);
    var i;
    var slides = document.querySelectorAll(".review-item");
    var dots = document.querySelectorAll(".review__dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(
            " review__dot--active",
            ""
        );
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " review__dot--active";
}
