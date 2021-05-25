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


    // Event Header
    document.getElementById('openNav').addEventListener('click', function(){
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("overlay").style.display = "block";
    });

    document.getElementById('closeNav').addEventListener('click', function(){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("overlay").style.display = "none";
    });

    document.getElementById('overlay').addEventListener('click', function(){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("overlay").style.display = "none";
    });

    console.log(true);
    console.log(123);
  },
  {
    passive: false,
  }
);
