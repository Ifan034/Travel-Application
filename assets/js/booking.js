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









