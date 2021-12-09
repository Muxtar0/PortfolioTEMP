const hamburgermenuicon = document.querySelector('.hamburgermenuicon');
const openmenu = document.querySelector('.openmenu');
hamburgermenuicon.addEventListener('click' , (e) => {
    hamburgermenuicon.classList.toggle('active');
    openmenu.classList.toggle('active');
})

/* template theme */
const theme = document.querySelector('.theme');
const body = document.querySelector('#body');
const bannerbgimg = document.querySelector('#banner .bg-image img')
theme.addEventListener('click' , (e) => {
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
