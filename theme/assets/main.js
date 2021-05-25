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

    let parent = document.getElementsByClassName('its-parent');
    for (let i = 0; i < parent.length; i++) {
        parent[i].addEventListener('click', function(){
            console.log(this)
            let children = this.nextElementSibling;
            console.log(children.offsetHeight )

            this.classList.toggle("downed");
            console.log(true);
        })
    }

    var slideOpen = true;
    var heightChecked = false;
    var initHeight = 0;
    
    function slideToggle(height) {
        if(!heightChecked) {
            initHeight = height;
            heightChecked = true;
        }
        if(slideOpen) {
            slideOpen = false;
            mdiv.style.height = '0px';
        }
        else {
            slideOpen = true;
            mdiv.style.height = initHeight + 'px';
        }
    }



    console.log(true);
    console.log(123);
  },
  {
    passive: false,
  }
);
