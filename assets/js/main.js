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
            logo.src = 'assets/images//LEYL.png';
            mobilelogo.src = 'assets/images//LEYL.png';

    }
    else if(localStorage.getItem("theme") == "light"){
            body.classList.remove('dark');
            body.classList.add('light');
            bannerbgimg.src = 'assets/images/Frame 1.png';
            logo.src = 'assets/images/LEYL (1).png';
            mobilelogo.src = 'assets/images/LEYL (1).png';

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
const mainbuttonhover = document.querySelectorAll('.mainbuttonhover');
for(let i = 0 ; i < theme.length ; i++){
    theme[i].addEventListener('click' , (e) => {
        if(e.target.classList.contains("lighttarget")){
            localStorage.setItem("theme" , "light");
            body.classList.remove('dark');
            body.classList.add('light');
            bannerbgimg.src = 'assets/images/Frame 1.png';
            logo.src = 'assets/images/LEYL (1).png';
            mobilelogo.src = 'assets/images/LEYL (1).png';

        }    
        if(e.target.classList.contains("darktarget")){
            localStorage.setItem("theme" , "dark");

            body.classList.remove('light');
            body.classList.add('dark');
            bannerbgimg.src = 'assets/images/FrameDark.png';
            logo.src = 'assets/images//LEYL.png';
            mobilelogo.src = 'assets/images//LEYL.png';


        }
    })
}
ThemeControl();






