// ==========================================
// TINASHE MOTSHUBI — PORTFOLIO
// MOBILE NAVIGATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("nav-open");

        menuToggle.classList.toggle("menu-active", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close the menu after selecting a navigation link

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("nav-open");
            menuToggle.classList.remove("menu-active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // Close the menu when the Escape key is pressed

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navigation.classList.remove("nav-open");
            menuToggle.classList.remove("menu-active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

});
