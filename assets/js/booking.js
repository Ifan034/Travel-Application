'use strict';
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  
    // Redirect to payment.html
    window.location.href = "payment.html";
  });


  /* img slider */
  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('nextButton');
  let prev = document.getElementById('prevButton');
  let dots = document.querySelectorAll('.slider .dots li');
  
  let lengthItems = items.length - 1;
  let active = 0;
  next.onclick = function(){
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
  }
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
  }
  let refreshInterval = setInterval(()=> {next.click()}, 9000);
  function reloadSlider(){
      slider.style.left = -items[active].offsetLeft + 'px';
      // 
      let last_active_dot = document.querySelector('.slider .dots li.active');
      last_active_dot.classList.remove('active');
      dots[active].classList.add('active');
  
      clearInterval(refreshInterval);
      refreshInterval = setInterval(()=> {next.click()}, 9000);
  
      
  }
  
  dots.forEach((li, key) => {
      li.addEventListener('click', ()=>{
           active = key;
           reloadSlider();
      })
  })
  window.onresize = function(event) {
      reloadSlider();
  };

  //popup js
  function togglePopup() { 
    const overlay = document.getElementById('your-popup-id'); 
    overlay.classList.toggle('show'); 

  }

  function togglePopupTwo() { 
    const overlay = document.getElementById('your-popup-id-two'); 
    overlay.classList.toggle('show'); 

  } 



//Accordian itenary
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function toggleAccordionText(button) {
  var accordionText = button.querySelector('.accordion-text');

  if (accordionText.style.color === 'rgb(168, 0, 84)') {
      accordionText.style.color = '';
  } else {
      accordionText.style.color = 'rgb(168, 0, 84)';
  }
}


//Faq
function toggleAccordionTextTwo(button) {
  var accordionTextTwo = button.querySelector('.accordion-text-faq');

  if (accordionTextTwo.style.color === 'rgb(168, 0, 84)') {
      accordionTextTwo.style.color = '';
  } else {
      accordionTextTwo.style.color = 'rgb(168, 0, 84)';
  }
}


//Client img slider 


const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);







