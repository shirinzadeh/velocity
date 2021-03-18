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

   
/** CHANGE TAB CONTENT WHEN CLICK THE TAB */

const tabs = document.querySelectorAll(".js-tab");
const tabContent = document.querySelectorAll(".js-tab-content");
const tabsCalculator = document.querySelectorAll(".js-calculator-tab"); 
const tabsCalcCountry = document.querySelectorAll(".js-calculator-tab-c"); //Country tabs in calculator sect.
const tabsPackage = document.querySelectorAll(".js-package-tab"); //Country tabs in calculator sect.

/** Tariffs section tab */
tabs.forEach((tab, i) => {
   tab.addEventListener("click", () => {
      tabContent.forEach(content => content.classList.remove("has-show"));
      tabContent[i].classList.add("has-show");
      tabs.forEach(tab => tab.classList.remove("is-tab-active"));
      tab.classList.add("is-tab-active");
   });
});

/* Calculator section tab */ 
tabsCalcCountry.forEach((tabc) => {
   tabc.addEventListener("click", () => {
      tabsCalcCountry.forEach(tabc => tabc.classList.remove("is-tab-active"));
      tabc.classList.add("is-tab-active");
   });
});

tabsPackage.forEach((tab) => {
   tab.addEventListener("click", () => {
      tabsPackage.forEach(tab => tab.classList.remove("is-tab-active"));
      tab.classList.add("is-tab-active");
   });
});

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
