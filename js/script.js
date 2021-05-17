(function(){
   $("#slider-carousel").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      dots: true,
      loop: true,
   });   

   /* NICE-SELECT LIBRARY FOR SELECT */
   $('.js-niceselect').niceSelect();

   //LANGUAGE DROPDOWN
   $(".option").click(function() {
      $(".langtitle").text($(this).text()); 
      $(".list").hide();
   });

   $(".option").click(function() {
      $(".langtitle").text($(this).text()); 
   });
   
   $(".langtitle").click(function() {
      $(this).addClass('opened-lang')
      $("#lang_dropdown ul").show();
   });

   //Hide selected language in dropdown
   var hideLang = function() {
      $('.list a').each(function(i, li) {
         var title =  $('.langtitle');
         if(li.innerText === title.text()) {
            li.parentElement.style.display = "none";
         } else {
            li.parentElement.style.display = "block";
         }
      })
   };
   setInterval(hideLang, 0);

   // ADD CLASS TO BODY WHEN CLICK THE MENU BUTTON ON MOBILE 
   $('.navbar-toggler').click(function() {
      $('body').toggleClass('js-side-menu-open');
   });

   // CLOSE SIDE MENU
   $('#closeIcon').click(function() {
      $('body').removeClass('js-side-menu-open');
   });
   $('#closeDasboardIcon').click(function() {
      $('body').removeClass('js-side-dashboard-open');
   });

   //OPEN SIDE MENU
   $('.js-toggle-dashboard, .dashboard-compact').click(function() {
      $('body').toggleClass('js-side-dashboard-open');
   })

   $('.menu-compact').click(function() {
      $('body').toggleClass('js-side-dashboard-open');
   })
   
   //OPEN DASHBOARD MENU ON MOBILE
   $('.js-user').click(function() {
      $('body').addClass('js-side-dashboard-open');
   })

   //Hide menu links when click outside element
   $(document).mouseup(function (e) {
      $(".list").hide(); //hide language dropdown
      $('.langtitle').removeClass('opened-lang')

      if ($(e.target).closest(user).length === 0) {
         $(".user-image-dsk .sidebar").hide();
         // $(".sidebar__user-options").hide();
         // $(".sidebar__user i").removeClass("js-animate-icon");
         $('body').removeClass('js-side-dashboard-open');
         $('body').removeClass('js-side-menu-open');
      }
   });

   //Shop category
   var shopList = $('.shops-page .sidebar__list')
   shopList.click(function() {
      shopList.removeClass('active');
      $(this).addClass('active');
   })

   /* TOOGLE MENU LINKS CLICK THE ACCOUNT IMAGE */
   let user = $('.user-image-dsk');
   user.click(function() {
      $('.user-image-dsk .sidebar').toggle();
   })

   $('.sidebar__user').click(function() {
      let sidebarOptions = $('.sidebar__user-options');
      let iconDown =  $('.user-info .icon-menu-down_two_tone');
      //Show hide sidebar user options
      sidebarOptions.toggle();
      //Rotate icon when user options is visible
      iconDown.toggleClass('js-animate-icon', sidebarOptions.css('display') == 'block')
   })

   //Change icon color when content changes
   $('.input-flex input').on('change', function() {
      $(this).parents('.input-flex').find('i').css('color','white');
  });

  //Input focusout event
   $('.input-flex input').on('focusout', function() {
      //Change icon color if input is empty
      if($(this).val().length > 0) {
         $(this).parents('.input-flex').find('i').css('color','white');
      } else {
         $(this).parents('.input-flex').find('i').css('color','#FFFFFF80');
      }
  });

   //placeholder selectboxes with default value
   if($('body').is('.settings-page')){
      //Change position of label on filled inputs
      setTimeout(() => {
         if($('#select2-select2-placeholder-container').text().length > 0) {
            $('.custom_placeholder_select2').addClass('js-placeholder-label-parent');
         }
      }, 0);

      //Change icon color on filled inputs
      if($('.input-flex input').val().length > 0) {
         $('.input-flex input').parents('.input-flex').find('i').css('color','white');
      }
    }

    // SELECT ALL CHECKBOXES
     $('#selectAll').on('click',function(){
        console.log('dfg')
        if(this.checked){
            $('.checkbox').each(function(){
                this.checked = true;
            });
        }else{
             $('.checkbox').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.checkbox').on('click',function(){
        if($('.checkbox:checked').length == $('.checkbox').length){
            $('#select_all').prop('checked',true);
        }else{
            $('#select_all').prop('checked',false);
        }
    });

   /**SELECT 2 PLUGIN */

   /** Multiple selectbox */
   $(".multiple_select2").select2({
      tags: true,
      closeOnSelect : false,
      allowClear: true,
   });

  //Multiple Select 2 onclick event
   $('.multiple_select2').on('select2:open', function (e) {
      $('.custom_multiple_select2').addClass('js-label-parent');
      $('.newcourier-page #select2-select2-multiple-results').parents('.select2-dropdown').addClass('multiselect_dropdown_width');
      $('#select2-selects #select2-select2-multiple-results').parents('.select2-dropdown').addClass('placeholder_dropdown_width');
   });

   //Multipleselect unselect event
   $('.multiple_select2').on('select2:unselect', function (e) {
      if($(this).select2('data').length == 0) {
         //Close dropdown
         $('.multiple_select2').select2('close');
         //Center the label
         $('.custom_multiple_select2').removeClass('js-label-parent');
      }
      //Disable showing dropdown when remove tag clicked
      if (!e.params.originalEvent) {
         return;
      }
      e.params.originalEvent.stopPropagation();
   });

    //Multipleselect  onclose event
   $('.multiple_select2').on('select2:close', function (e) {
      let count = $(this).select2('data').length;
      if(count==0){
         $('.custom_multiple_select2').removeClass('js-label-parent')
      }
   });


   /** SEARCH SELECTBOX */
   $(".select_custom2").select2({
      placeholder: "Select a programming language",
      allowClear: true,
      tags: []
   });

   //Search select2 open event
   $('.select_custom2').on('select2:open', function (e) {
      $('#select2-search-results').parents('.select2-container').addClass('search-input-parent');
      $('#select2-search-results').parents('.select2-dropdown').addClass('placeholder_dropdown_width')
      $('.custom_search_select2').addClass('search-label-parent');
      $('.select2-selection__rendered').css('opacity', "1");
      $('.custom_search_select2 .select2-container--above').hide();
   });
      
   //Search select2 change event
   $('.select_custom2').on('change',function(e){
      var lastValue = e.currentTarget.value;
      $('.select2-search__field').val(lastValue);
   })

   //Search select2 close event
   $('.select_custom2').on('select2:close', function (e) {
      let count = $(this).select2('data').length
      if(count==0){
         $('.custom_search_select2').removeClass('search-label-parent');
      }
   });
 

   /** SELECT 2 PLACEHOLDER */
   $('.select2_placeholder').select2({
      minimumResultsForSearch: -1, //remove first item from dropwdown
   });

   //Placeholder select2 open event
   $('.select2_placeholder').on('select2:open', function (e) {
      $('#select2-select2-placeholder-results').parents('.select2-dropdown').addClass('placeholder_dropdown_width')
   });

   //Placeholder select2 open event
   $('.select2_placeholder').on('select2:select', function (e) {
      $(this).parents('.custom_placeholder_select2').addClass('js-placeholder-label-parent');
   });

   /** BOOTSTRAP DATEPICKER */

   //Datepicker language
   $.fn.datepicker.dates['az'] = {
      days: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
      daysShort: ["Baz", "Baz.e", "Çər.a", "Çər", "Cüm.a", "Cüm", "Şən"],
      daysMin: ["B", "B.e", "Ç.a", "Ç", "C.a", "C", "Ş"],
      months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
      monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avg", "Sen", "Okt", "Noy", "Dek"],
      today: "Bu gün",
      clear: "Təmizlə",
      format: "mm/dd/yyyy",
      titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
      weekStart: 0
  };

   $('#birthdate').datepicker({
      pickTime: true,
      // format: "dd/MM/yyyy",
      autoclose: true,
      weekStart: 1, //start week from Monday,
      language: 'az'
   });

})();


/** SWIPER JS FOR SHOP BRAND IMAGES */
const swiper = new Swiper('.swiper-container', {
   slidesOffsetAfter: 0,
   slidesOffsetBefore: 0,
   slidesPerView: 1.55  ,
   spaceBetween: 16,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   breakpoints: {
      360: {
         slidesPerView: 1.65,
      },
      375: {
         slidesPerView: 1.8
      },
      400: {
         slidesPerView: 2
      },
      440: {
         slidesPerView: 2.33
      },
      480: {
         slidesPerView: 2.5
      },
      550: {
         slidesPerView: 2.8
      },
      580: {
         slidesPerView: 3.2,
      },
      640: {
        slidesPerView: 3.4,
        spaceBetween: 20,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16
      },
      700: {
        slidesPerView: 3.6,
        spaceBetween: 40,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16
      },
      768: {
         slidesPerView: 3.3,
         spaceBetween: 40,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 16
      },
      850: {
         slidesPerView: 4.1,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 16
      },
      910: {
         slidesPerView: 4.4,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 16
      },
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 42,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16
      },

      1200: {
         slidesPerView: 5.1,
         spaceBetween: 42,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 0,
      },
      1300: {
         slidesPerView: 5.5,
         spaceBetween: 42,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 0,
      },
      1400: {
         slidesPerView: 6.1,
         spaceBetween: 42,
         slidesOffsetBefore: 16,
         slidesOffsetAfter: 0,
      }
    }
 });

/**  COPY TEXT TO CLIPBOARD */
 const copyIcon = document.querySelectorAll('.i-copy');
 const popup = document.querySelector('.popup');

 copyIcon.forEach((icon, i) => {
    icon.addEventListener('click', () => {
      let copyText = document.querySelectorAll("#copyToClipboard");

      copyText[i].select();
      copyText[i].setSelectionRange(0, 99999); /* For mobile devices */
    
      // /* Copy the text inside the text field */
      document.execCommand("copy");

      if(popup) {
         popup.classList.add("js-show-popup");
         //remove class when animation end
         setTimeout(() => {
            popup.classList.remove("js-show-popup");
         }, 750); 
      }
    })
 });

/** CHANGE TAB CONTENT WHEN CLICK THE TAB */

const tabs = document.querySelectorAll(".js-tab");
const categories = document.querySelectorAll(".js-category");
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
changeTabActive(categories)
   
/**  RANGE SLIDER */

// CHANGE RANGE SLIDER THUMB ACCORDING TO INPUT VALUE
const rangeVal = document.querySelectorAll('#rangeValue');
//range.value is input number value
   rangeVal.forEach((range,i) => {
      range.addEventListener('keyup', () => {
         let slider = document.querySelectorAll('#rangeSlider');
         //change slider which input number is changed
         slider[i].value = isNaN(parseInt(range.value, 10)) ? 0 : parseInt(range.value, 10);

         let valPercent = (slider[i].valueAsNumber  - parseInt(slider[i].min)) / (parseInt(slider[i].max) - parseInt(slider[i].min));
         let style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C9FFC7), color-stop('+ valPercent+', #181C1F));';
         slider[i].style = style;
      });
   });

// CHANGE RANGE VALUE AND BACKGROUND COLOR BEFORE AND AFTER THUMB 
const sliders = document.querySelectorAll("#rangeSlider");
sliders.forEach(function(slider, i) {   
   rangeVal[i].defaultValue = slider.value;

   slider.oninput =function(){   
      rangeVal[i].defaultValue = this.value; //change value text depends on range value
      //different color before and after thumb while sliding the range
      let valPercent = (slider.valueAsNumber  - parseInt(slider.min)) / (parseInt(slider.max) - parseInt(slider.min));
      let style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C9FFC7), color-stop('+ valPercent+', #181C1F));';
      slider.style = style;
   };
   slider.oninput();
 });

/** DİSPLAY TOOLTIP */
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

/** ADD READ MORE BUTTON END TO TRUNCATED TEXT */
const ps = document.querySelectorAll('.line-clamp');
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
  }
});

ps.forEach(p => {
   console.log(p)
  observer.observe(p);
});
