'use strict';

/* Navbar Toggle Function */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/* Header sticky & go to Up Button */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 650) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


/* Preloader website */
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; 
  
});





/* typewriter Text header */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Let's Discover The World Together.", "Seamless Travel Experiences at Your Fingertips.", "Where Every Trip Tells a Story."];
const el = document.getElementById("typewriter");

let sleepTime = 200;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();


/* Number Counting Animation */
let valueDisplays = document.querySelectorAll(".num");
let interval = 50000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent =startValue + "+";
    if (startValue == endValue) {
      clearInterval(counter );
    }
  }, duration);
});


/* Client Testimonial*/

const testimonials = [
  {
    name: "Eva Sawyer",
    job: "Traveller",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "★★★★★",
    testimonial:
      "I stumbled upon this incredible travel website while planning my last-minute adventure, and it turned out to be a hidden gem! The user-friendly interface made it a breeze to navigate through various destinations and find the perfect tour that suited my adventurous spirit. ",
  },
  {
    name: "Katey Topaz",
    job: "Traveller",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: "★★★★★",
    testimonial:
      "Planning a family vacation can be a daunting task, but this travel website made it an absolute joy! The website's extensive range of family-friendly destinations and activities helped me create a customized itinerary that catered to everyone's interests.",
  },
  {
    name: "Jae Robin",
    job: "Traveller",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    rating: "★★★★★",
    testimonial:
      "As a budget-conscious traveler, I'm always on the lookout for affordable yet quality travel experiences. This website exceeded my expectations! The search filters allowed me to find budget-friendly options without compromising on the adventure.",
  },
  {
    name: "Nicola Blakely",
    job: "Traveller",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    testimonial:
      "From affordable accommodations to budget-friendly activities, the website provided a range of choices that fit my pocket. Thanks to this platform, I had an amazing vacation without breaking the bank. I highly recommend it to fellow travelers seeking both value and quality.",
  },
];


let i = 0;

let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h5>${testimonials[i].job}</h5>
    <h6>${testimonials[i].rating}</h6>
    <p>${testimonials[i].testimonial}</p>
  `;
};
window.onload = displayTestimonial;


