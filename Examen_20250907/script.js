
// Смена цветовой темы сайта.

const savedTheme = localStorage.getItem('theme') || 'light-theme';
document.body.className = savedTheme;

const switchThemeBthElement = document.getElementById("switchThemeBtn");

switchThemeBthElement.addEventListener("click", () => {
    const currentTheme = document.body.className;

    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    document.body.className = newTheme;

    localStorage.setItem('theme', newTheme);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Кнопка прокрутки вверх страницы.

const scrollToTopBtnElement = document.querySelector("#scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300 ) {
        scrollToTopBtnElement.classList.add("show");
    } else {
        scrollToTopBtnElement.classList.remove("show");
    }
});

scrollToTopBtnElement.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// TABs. 
// Блок о сотрудниках.

const tabsMenuElement = document.querySelector(".tabs-menu");
const tabsMenuItems = document.querySelectorAll(".tabs-menu-item");
const tabElements = document.querySelectorAll(".tab");

function hideTabs() {
    tabElements.forEach((tabElement) => {
        tabElement.classList.add("hidden");
        tabElement.classList.remove("show");
    });
    tabsMenuItems.forEach((tabsMenuItem) => tabsMenuItem.classList.remove("active"));
}

function showTab(i = 0) {
    tabElements[i].classList.add("show", "animated");
    tabElements[i].classList.remove("hidden");
    tabsMenuItems[i].classList.add("active");
}

hideTabs();
showTab();

tabsMenuElement.addEventListener("click", (event) => {
    const targetEl = event.target;
    if (targetEl.classList.contains("tabs-menu-item")) {
        tabsMenuItems.forEach((tabsMenuItem, index) => {
            if (tabsMenuItem === targetEl) {
                hideTabs();
                showTab(index);  
            }
        })
    }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
