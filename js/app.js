/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/














/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const ulList = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
sections.forEach(section => {
   let liList = document.createElement('li');
   let link = document.createElement('a');

   link.addEventListener('click', function () {
      section.scrollIntoView({ behavior: 'smooth' })
   })

   let text = section.getAttribute('data-nav');
   let textValue = document.createTextNode(text);
   link.appendChild(textValue);
   liList.appendChild(link);
   fragment.appendChild(liList);
   /**
    * End Helper Functions
    * Begin Main Functions
    * 
   */

   // build the nav
});
ulList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 

// Scroll to section on link click

let activeSection = null;
window.addEventListener('scroll', function (event) {
   event.preventDefault()

   sections.forEach(section => {
      section.classList.remove('your-active-class')

      let react = section.getBoundingClientRect();
      if (react.top >= -50 && react.top < 200) {
         section.classList.add('your-active-class')
         activeSection = section;
      }
   })

   // Set sections as active
   const links = document.querySelectorAll('a')
   links.forEach(link => {
      link.classList.remove('active-link')
      if (activeSection != null) {
         if (activeSection.getAttribute('data-nav') == link.textContent) {
            link.classList.add('active-link')
         }
      }
   });
});

