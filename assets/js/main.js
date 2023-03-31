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
