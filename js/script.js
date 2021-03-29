(function(){
   $("#slider-carousel").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 1,
      margin: 0,
      stagePadding: 0,
      nav: false,
      dots: true,
      loop: true,
   });   
   
   /* NICE-SELECT LIBRARY FOR SELECT */
   $('select').niceSelect();

   // ADD CLASS TO BODY WHEN CLICK THE MENU BUTTON ON MOBILE 
   $('.navbar-toggler').click(function() {
      $('body').toggleClass('js-side-menu-open');
   });
   // CLOSE SIDE MENU
   $('#closeIcon').click(function() {
      $('body').removeClass('js-side-menu-open');
   });
})();


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/** CHANGE TAB CONTENT WHEN CLICK THE TAB */

const tabs = document.querySelectorAll(".js-tab");
const tabContent = document.querySelectorAll(".js-tab-content");

const tabsModal = document.querySelectorAll(".js-modal-tab");
const tabModalContent = document.querySelectorAll(".js-modal-tab-content");



const tabsCalculator = document.querySelectorAll(".js-calculator-tab"); 
const tabsCalcCountry = document.querySelectorAll(".js-calculator-tab-c"); //Country tabs in calculator sect.
const tabsPackage = document.querySelectorAll(".js-adjacent-tab"); //Country tabs in calculator sect.

const products = document.querySelector('.products'); //Package modal products tab content
const actionIcons = document.querySelector('.modal-body .action-icons') //Package Modal Icons

/** Adjacent Tabs function */
function tabFunction(elements, elContent) {
   elements.forEach((el, i) => {
      el.addEventListener('click', ()=> {
         elContent.forEach(content=> content.classList.remove("has-show"));
         elContent[i].classList.add("has-show");
         elements.forEach(el => el.classList.remove("is-tab-active"));
         el.classList.add("is-tab-active");

         if(products && actionIcons) {
            products.classList.contains('has-show') ? actionIcons.style.display = "none" : actionIcons.style.display = "block";
         }
      })
   })
}

function changeTabActive(elements) {
   elements.forEach((el) => {
      el.addEventListener("click", () => {
         elements.forEach(el => el.classList.remove("is-tab-active"));
         el.classList.add("is-tab-active");
      });
   });
}

tabFunction(tabs, tabContent);
tabFunction(tabsModal, tabModalContent);
changeTabActive(tabsCalcCountry) //Calculator section tabs
changeTabActive(tabsPackage)

/* Calculator section 
   CHANGE RANGE VALUE AND BACKGROUND COLOR BEFORE AND AFTER THUMB */

const sliders = document.querySelectorAll("#rangeSlider");
const output = document.querySelectorAll("#rangeValue");

sliders.forEach(function(slider, i) {   
   output[i].innerHTML = slider.value;

   slider.oninput =function(){   
      output[i].innerHTML = this.value; //change value text depends on range value
      //different color before and after thumb while sliding the range
      let valPercent = (slider.valueAsNumber  - parseInt(slider.min)) / (parseInt(slider.max) - parseInt(slider.min));
      let style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C9FFC7), color-stop('+ valPercent+', #181C1F));';
      slider.style = style;
   };
   slider.oninput();
 });

/** DISPLAY POPUP MESSAGE ON ADDRESSES*/
const copyIcons = document.querySelectorAll('.i-copy');
const popup = document.querySelector('.popup')

copyIcons.forEach((icon) => {
   icon.addEventListener('click', () => {
      popup.classList.add("js-animation");
      //remove class when animation end
      setTimeout(() => {
         popup.classList.remove("js-animation");
      }, 2000); 
   })
})

// TOOLTIP PACKAGE
// const tooltipBtn = document.querySelectorAll('.vlct-tooltip i');
// const tooltipInfo = document.querySelectorAll('.tooltip--info');
// const tooltipWarning = document.querySelectorAll('.tooltip--warning');

// tooltipBtn.forEach((tooltip, i) => {
//    //Show tooltip when hover icon
//    tooltip.addEventListener('mouseover', () => {   
//       //If icon is warning icon, show warning icon tooltip. If not, show info icon tooltip
//       tooltip.classList.contains('warning') ? tooltipWarning[0].style.opacity = "1" : tooltipInfo[i].style.opacity = "1";
//    })
//    //Hide tooltip when leave the icon
//    tooltip.addEventListener('mouseleave', () => {
//       tooltip.classList.contains('warning') ? tooltipWarning[0].style.opacity = "0" : tooltipInfo[i].style.opacity = "0";
//    })
// });

//SIDEBAR
const sideUser = document.querySelector('.sidebar__user');
const sideUserOptions = document.querySelector('.sidebar__user-options');
const iconDown = document.querySelector('.user-info .icon-menu-down_two_tone');

if(sideUser) {
   sideUser.addEventListener('mouseover', () => {
      sideUserOptions.style.display = "block";
      //change icon when hover
      iconDown.style.transform = "rotate(180deg)";
      iconDown.style.transition = "all .3s ease";
   });
   sideUser.addEventListener('mouseleave', () => {
      sideUserOptions.style.display = "none";
      iconDown.style.transform = "rotate(0deg)";
   });
}


/** TOGGLE PASSWORD VISIBILITY */
const password = document.querySelectorAll('#password');
const togglePassword = document.querySelectorAll('#togglePassword');

togglePassword.forEach((pw, i) => {
   pw.addEventListener('click', () => {
      const type = password[i].getAttribute('type') === 'password' ? 'text' : 'password';
      password[i].setAttribute('type', type);
      pw.classList.toggle("icon-eye-off_two_tone")
      pw.innerHTML = `<span class="path1"></span><span class="path2"></span><span class="path3"></span>` ? 
                     `<span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>` :
                     `<span class="path1"></span><span class="path2"></span><span class="path3"></span>`;

   })
})