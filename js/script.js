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

//  $("select").bsMultiSelect();

   
   /* NICE-SELECT LIBRARY FOR SELECT */
   $('select').niceSelect();
   // $('.must').selectpicker();
   // $(".selectpicker").selectpicker();
   // $(".bootstrap-select").click(function () {
   //      $(this).addClass("open");
   // });

   // ADD CLASS TO BODY WHEN CLICK THE MENU BUTTON ON MOBILE 
   $('.navbar-toggler').click(function() {
      $('body').toggleClass('js-side-menu-open');
      // $('body').toggleClass('js-side-dashboard-open');
   });
   // CLOSE SIDE MENU
   $('#closeIcon').click(function() {
      $('body').removeClass('js-side-menu-open');
   });
   $('#closeDasboardIcon').click(function() {
      $('body').removeClass('js-side-dashboard-open');
   });

   $('.js-toggle-dashboard').click(function() {
      $('body').toggleClass('js-side-dashboard-open');
   })

   $('.sidebar__user').click(function() {
      let userOptions = $('.sidebar__user-options');
      let iconDown =  $('.user-info .icon-menu-down_two_tone');
      //Show hide sidebar user options
      userOptions.toggle();
      //Rotate icon when user options is visible
      iconDown.toggleClass('js-animate-icon', userOptions.css('display') == 'block')
   })

   //Toggle menu links when click the account image
   let user = $('.user-image-dsk');
   user.click(function() {
      $('.user-image-dsk .sidebar').toggle();
   })
   //Hide menu links when click outside account image
   $(document).mouseup(function (e) {
      if ($(e.target).closest(user).length === 0) {
         $(".user-image-dsk .sidebar").hide();
         // $('.sidebar__user-options').hide();
      }
   });

   $('.js-user').click(function() {
      $('body').addClass('js-side-dashboard-open');
   })

   /** Selectbox floating label */
   $('.form-control-category').on('focus blur change', function (e) {
      var $currEl = $(this);
     
     if($currEl) {
      if($currEl.is('select')) {
         if($currEl.val() === $("option:first", $currEl).val()) {
           $('.control-label', $currEl.parent()).animate({opacity: 0, top: '50%',},140);
          $currEl.parent().removeClass('focused'); 
          $('.form-control-category > .current').css("color", "rgba(255,255,255,0.5)");
        } else {
           $('.control-label', $currEl.parent()).css({top: '-1px', opacity: 1},140);
          // $('.form-control-category > .current').css("color", "#fff");
 
           $currEl.parents('.form-group').toggleClass('focused', ((e.type === 'focus' || this.value.length > 0) && ($currEl.val() !== $("option:first", $currEl).val())));
        }
      } else {
         $currEl.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
      }
     }
   }).trigger('blur');
})();

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

// DİSPLAY TOOLTIP
const tooltipInfo = document.querySelectorAll('.tooltip--info');
const tooltipWarning = document.querySelectorAll('.tooltip--warning');
const tooltipInfoArrow = document.querySelectorAll('.tooltip--info + .tooltip-arrow');
const tooltipWarningArrow = document.querySelectorAll('.tooltip--warning + .tooltip-arrow');
const infoIcons = document.querySelectorAll('.js-icon-info')
const warningIcons = document.querySelectorAll('.js-icon-warning')

function tooltipMouseover(elements, content, contentArrow) {
   elements.forEach((el, i) => {
      el.addEventListener('mouseover', () => {
         content[i].style.opacity = "1";
         contentArrow[i].style.opacity = "1"
      })
   })
}
function tooltipMouseleave(elements, content, contentArrow) {
   elements.forEach((el, i) => {
      el.addEventListener('mouseleave', () => {
         content[i].style.opacity = "0";
         contentArrow[i].style.opacity = "0"
      })
   })
}

tooltipMouseover(infoIcons, tooltipInfo, tooltipInfoArrow);
tooltipMouseover(warningIcons, tooltipWarning, tooltipWarningArrow);
tooltipMouseleave(infoIcons, tooltipInfo, tooltipInfoArrow);
tooltipMouseleave(warningIcons, tooltipWarning, tooltipWarningArrow);

//SIDEBAR
// const sideUser = document.querySelector('.sidebar__user');
// const sideUserOptions = document.querySelector('.sidebar__user-options');
// const iconDown = document.querySelector('.user-info .icon-menu-down_two_tone');

// if(sideUser) {
//    sideUser.addEventListener('click', () => {
//       sideUserOptions.style.display = "block";
//       //change icon when hover
//       iconDown.style.transform = "rotate(180deg)";
//       iconDown.style.transition = "all .3s ease";
//    });

//    let hideUserOptions =  function() {
//       sideUserOptions.style.display = "none";
//       iconDown.style.transform = "rotate(0deg)";
//    }

//    // sideUser.addEventListener('mouseleave', hideUserOptions);
//    sideUser.addEventListener('click', hideUserOptions);
// }


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
});

onclick="this.setAttribute('value', document.querySelector('.nice-select .current').innerHTML); console.log(this)"

// const selects = document.querySelectorAll('.nice-select.floating-select');
// const selectValue = document.querySelector('.nice-select.floating-select .current');
// const listitem = document.querySelector('.nice-select.floating-select li[data-value]')
// selects.forEach((select, i) => {
//    select.addEventListener('click', () => {
//       console.log(selectValue)
//       if(selectValue.length >= 1) {
//          console.log('fg')
//       }
//    })
// })
