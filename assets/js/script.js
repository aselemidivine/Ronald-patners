'use strict';


const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }



// Scroll animation with intersector

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});


// TYPING EFFECT

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


var typed= new Typed(".auto-type", {
  strings: ["CANADA", " USA", "IRELAND", " UK", " EUROPE", ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})



// TO TOP MENU 

const toTop = document.querySelector (".to-top");
window.addEventListener("scroll", () => {
    if  (window.pageYOffset > 100)  {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove ("active");
    }
})

// SWIPPER JS
// var swiper = new Swiper("mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true
//   },
  
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
// })

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




// POPUP AFTER FORM SUBMISSION
// let popup = document.getElementById("popup");
// let closeBtn = document.querySelector(".button-close-modal");

// function openPopup() { 
//   popup.classList.add("open-popup");
// }

// function closePopup() { 
//   popup.classList.remove("open-popup");
//   document.addEventListener(
//     "click",
//     function(event) {
//       // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
//       if (
//         event.target.matches("button-close-modal") ||
//         !event.target.closest("popup")
//       ) {
//         closeModal()
//       }
//     },
//     false
//   )
// }


// function closeModal() {
//     document.getElementById("popup").style.display = "none"
//   }
  
//   // Close modal when clicking outside the modal or on the close button
//   window.addEventListener("click", function(event) {
//     if (event.target === popup || event.target === closeBtn) {
//       closeModal();
//     }
//   });



const formValue = document.getElementById('form');

//reset form value...
const resetForm = () => {
  formValue.reset();
};

formValue.addEventListener('submit', function(e) {
  e.preventDefault();
  //send request using urlencoded
  const prePayload = new FormData(formValue);
  const payload = new URLSearchParams(prePayload);
  console.log([...payload]);

  //plug into the database .....  
  // replace url with your api url
  // fetch('http://localhost:3000/api/submit-form', {
  fetch('https://wild-blue-salmon-vest.cyclic.app/api/submit-form', {
    method: 'POST',
    body: payload,
    mode: 'cors'
  })
    
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    resetForm();
});

// Function to alert when form have been submitted
var form = document.getElementById('form');

function myFunction() {
  if (form.checkValidity()) {
    alert("Adding Succesful!");
  }
}


// TO TOP MENU 

// const toTop = document.querySelector (".to-top");
// window.addEventListener("scroll", () => {
//     if  (window.pageYOffset > 100)  {
//         toTop.classList.add("active");
//     }
//     else {
//         toTop.classList.remove ("active");
//     }
// })
// });

// POPUP AFTER FORM SUBMISSION
let popup = document.getElementById("popup");
let closeBtn = document.querySelector(".button-close-modal");

function openPopup() { 
  popup.classList.add("open-popup");
}

function closePopup() { 
  popup.classList.remove("open-popup");
  document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches("button-close-modal") ||
        !event.target.closest("popup")
      ) {
        closeModal()
      }
    },
    false
  )
}


function closeModal() {
    document.getElementById("popup").style.display = "none"
  }
  
  // Close modal when clicking outside the modal or on the close button
  window.addEventListener("click", function(event) {
    if (event.target === popup || event.target === closeBtn) {
      closeModal();
    }
  });

 






















