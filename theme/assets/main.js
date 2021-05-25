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
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("navigation").style.opacity = "1";
        document.getElementById("overlay").style.display = "block";
    });

    document.getElementById('closeNav').addEventListener('click', function(){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("navigation").style.opacity = "0";
        document.getElementById("overlay").style.display = "none";
    });

    document.getElementById('overlay').addEventListener('click', function(){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("navigation").style.opacity  = "0";
        document.getElementById("overlay").style.display = "none";
    });

    let parent = document.getElementsByClassName('its-parent');
    for (let i = 0; i < parent.length; i++) {
        parent[i].addEventListener('click', function(){
            let children = this.nextElementSibling;
            slideToggle(this, children);
            this.classList.toggle("downed");
            console.log(true);
        })
    }


    var isBlock = false;
    function slideToggle(parent, children) {
        if (parent.classList.contains("downed")) {
            isBlock = true;
        }
        else{
            isBlock = false;
        }
        console.log(isBlock)
        if(!isBlock) {
            children.style.display = 'block';
            isBlock = true;
        }
        else {
            children.style.display = 'none';
            isBlock = false;
        }
    }



    console.log(true);
    console.log(123);
  },
  {
    passive: false,
  }
);
