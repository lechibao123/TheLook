"use strict";
document.addEventListener(
    "DOMContentLoaded",
    function (event) {
        let slideshow = () => {
            let slideshow = document.querySelectorAll(
                '[data-section-type="slideshow"]'
            );
            slideshow.forEach((section) => {
                let configList = section.querySelectorAll("[data-tns-config]");
                configList.forEach((config) => {
                    tns(JSON.parse(config.innerHTML));
                });
            });
        };
        slideshow();
        document.addEventListener("shopify:section:load", () => slideshow());

        console.log(true);
        console.log(123)
    },
    {
        passive: false,
    }
);
