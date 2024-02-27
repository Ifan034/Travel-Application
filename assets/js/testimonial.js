'use strict';

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
  