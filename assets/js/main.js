/* Banner Text Animation */
let time = 700;
let change = "true"
$(function() {
  let gameTimer = function() {
      setTimeout(function () {
          // Cycle words instead of random.
          let randomWords = [
          "Hey There","Hey There"
          ];
          let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
          $("#randomGame").html(randomWord[0]);
          for(let i = 1; i < randomWord.length; i++) {
              setTimeout(function() {
                  let letter = randomWord.charAt(i);
                  $("#randomGame").append(letter);
              }, 100 * i);
          }
      }, time);

  };

  gameTimer();

});
/* Skill percents */
const skillpercenttext = document.querySelectorAll('.skillpercenttext');
const skillpercent = document.querySelectorAll('.skillpercent span');
for(let i =0 ; i< skillpercenttext.length; i++){
    skillpercent[i].style.width = skillpercenttext[i].innerHTML;
}
/* Theme Control */
const logo = document.querySelector('#pageright .logo img');
const mobilelogo = document.querySelector('.mobilenavmenu .logo img')

function ThemeControl(){
    
    if(localStorage.getItem("theme") == "dark"){
        body.classList.remove('light');
            body.classList.add('dark');
            bannerbgimg.src = 'assets/images/FrameDark.png';
            logo.src = 'assets/images/Logo.png';
            mobilelogo.src = 'assets/images/Logo.png';

    }
    else if(localStorage.getItem("theme") == "light"){
            body.classList.remove('dark');
            body.classList.add('light');
            bannerbgimg.src = 'assets/images/Frame 1.png';
            logo.src = 'assets/images/LogoLight.png';
            mobilelogo.src = 'assets/images/LogoLight.png';

    }
}
/* Mobile Nav */
const hamburgermenuiconmobile = document.querySelector('.hamburgermenuiconmobile');
const mobilenavmenu = document.querySelector('.mobilenavmenu');
const mobileopenmenu = document.querySelector('.mobileopenmenu');
const mobileopenmenuli = document.querySelectorAll('.mobileopenmenu .navlist ul li');
hamburgermenuiconmobile.addEventListener('click' , (e) => {
    hamburgermenuiconmobile.classList.toggle('active');
    mobilenavmenu.classList.toggle('active');
    mobileopenmenu.classList.toggle('active');
})
for(let i = 0 ; i < mobileopenmenuli.length; i++){
    mobileopenmenuli[i].addEventListener('click' , () => {
        hamburgermenuiconmobile.classList.toggle('active');
        mobilenavmenu.classList.toggle('active');
        mobileopenmenu.classList.toggle('active');
    })
}


/* Dekstop Nav */
const hamburgermenuicon = document.querySelector('.hamburgermenuicon');
const openmenu = document.querySelector('.openmenu');
const openmenuli = document.querySelectorAll('.openmenu li');
const pageright = document.querySelector('#pageright');
hamburgermenuicon.addEventListener('click' , (e) => {
    hamburgermenuicon.classList.toggle('active');
    openmenu.classList.toggle('active');
    pageright.classList.toggle('active');
})
for(let i = 0 ; i < openmenuli.length; i++){
    openmenuli[i].addEventListener('click' , () => {
        hamburgermenuicon.classList.toggle('active');
        openmenu.classList.toggle('active');
        pageright.classList.toggle('active');
    })
}


/* template theme */
const theme = document.querySelectorAll('.theme');
const body = document.querySelector('#body');
const bannerbgimg = document.querySelector('#banner .bg-image img')
for(let i = 0 ; i < theme.length ; i++){
    theme[i].addEventListener('click' , (e) => {
        if(e.target.classList.contains("lighttarget")){
            localStorage.setItem("theme" , "light");
            body.classList.remove('dark');
            body.classList.add('light');
            bannerbgimg.src = 'assets/images/Frame 1.png';
            logo.src = 'assets/images/LogoLight.png';
            mobilelogo.src = 'assets/images/LogoLight.png';

        }    
        if(e.target.classList.contains("darktarget")){
            localStorage.setItem("theme" , "dark");

            body.classList.remove('light');
            body.classList.add('dark');
            bannerbgimg.src = 'assets/images/FrameDark.png';
            logo.src = 'assets/images/Logo.png';
            mobilelogo.src = 'assets/images/Logo.png';


        }
    })
}

/* Banner Animation */
const bannerleftcol = document.querySelector("#banner .leftcol")
const bannerrightcol = document.querySelector("#banner .rightcol")
  document.addEventListener("DOMContentLoaded", function(event) {
        bannerleftcol.classList.add('active')
        bannerrightcol.classList.add('active')
   });

/* Page Scroll Animation */
window.addEventListener('scroll' , reveal)
function reveal () {

    if(window.scrollY > 30) {
        document.querySelector('.mobilenavmenu').classList.add('bgdark')
    }
    else {
        document.querySelector('.mobilenavmenu').classList.remove('bgdark')
    }

    var reveals = document.querySelectorAll('.reveal')

    for(let i = 0 ; i < reveals.length ; i++){
        var windowsheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 30;
        if(revealtop < windowsheight - revealpoint){
            reveals[i].classList.add('active')
        }

    }
}
/* Button animation */

const mainbuttonhover = document.querySelectorAll('.mainbuttonhover');

for(let i = 0 ; i < mainbuttonhover.length; i++){
  mainbuttonhover[i].addEventListener('mousemove' , () => {
    mainbuttonhover[i].classList.add('width');
    setTimeout(() => {
      mainbuttonhover[i].classList.add("height")
    },200)
    setTimeout(() => {
      mainbuttonhover[i].classList.add("paddingbottom")
    },700)
    setTimeout(() => {
      mainbuttonhover[i].classList.add("paddingleft")
    },900)
  })
  mainbuttonhover[i].addEventListener('mouseout' , () => {
    mainbuttonhover[i].classList.remove('width');
    setTimeout(() => {
      mainbuttonhover[i].classList.remove("height")
    },200)
    setTimeout(() => {
      mainbuttonhover[i].classList.remove("paddingbottom")
    },700)
    setTimeout(() => {
      mainbuttonhover[i].classList.remove("paddingleft")
    },900)
  })
}

/* Swiper */
var swiper = new Swiper(".gifslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
  var swiper = new Swiper(".slider3d", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },

    },
  });
  var swiper = new Swiper(".sliderminimal", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },

    },
  });
  var swiper = new Swiper(".testimonialsslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:'true',
    },
    breakpoints: {
      100: {
          slidesPerView: 1,
        spaceBetween: 80,
      },
      640: {
          slidesPerView: 1,
        spaceBetween: 50,
      },
      768: {
          slidesPerView: 1,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50,
      },

    },
  });












ThemeControl();






