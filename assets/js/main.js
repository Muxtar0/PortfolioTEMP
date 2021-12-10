/* Mobile Nav */
const hamburgermenuiconmobile = document.querySelector('.hamburgermenuiconmobile');
const mobilenavmenu = document.querySelector('.mobilenavmenu');
const mobileopenmenu = document.querySelector('.mobileopenmenu');
hamburgermenuiconmobile.addEventListener('click' , (e) => {
    hamburgermenuiconmobile.classList.toggle('active');
    mobilenavmenu.classList.toggle('active');
    mobileopenmenu.classList.toggle('active');
})



/* Dekstop Nav */
const hamburgermenuicon = document.querySelector('.hamburgermenuicon');
const openmenu = document.querySelector('.openmenu');
const pageright = document.querySelector('#pageright');
hamburgermenuicon.addEventListener('click' , (e) => {
    hamburgermenuicon.classList.toggle('active');
    openmenu.classList.toggle('active');
    pageright.classList.toggle('active');
})



/* template theme */
const theme = document.querySelectorAll('.theme');
const body = document.querySelector('#body');
const bannerbgimg = document.querySelector('#banner .bg-image img')
for(let i = 0 ; i < theme.length ; i++){
    theme[i].addEventListener('click' , (e) => {
        if(e.target.classList.contains("lighttarget")){
            body.classList.remove('dark');
            body.classList.add('light');
            bannerbgimg.src = 'assets/images/Frame 1.png';
        }
        if(e.target.classList.contains("darktarget")){
            body.classList.remove('light');
            body.classList.add('dark');
            bannerbgimg.src = 'assets/images/FrameDark.png';
        }
    })
}

