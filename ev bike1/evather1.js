var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');   
})



function showVideo() {
    document.querySelector('.bg-video').style.opacity = "1";
    document.querySelector('.bg-image').style.opacity = "0";
}

function showImage() {
    document.querySelector('.bg-video').style.opacity = "0";
    document.querySelector('.bg-image').style.opacity = "1";
}

