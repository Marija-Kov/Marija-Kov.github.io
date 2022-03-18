let thumbs = document.querySelectorAll(".thumb");
let large = document.querySelector("#large");
let largeImg = document.querySelectorAll('img');
let btn = document.querySelector('button');

thumbs.forEach(thumb =>{
    thumb.addEventListener('click', () => {
    large.innerHTML = `${thumb.innerHTML}`
    });
});

largeImg.forEach(imgL => {
    
    imgL.addEventListener('mouseenter', () => {
      imgL.style.filter = "grayscale(0%)";
    });
    imgL.addEventListener('mouseout', () => {
        imgL.style.filter = "grayscale(80%)";
    });

});

btn.addEventListener('click', () => {
    if(btn.classList.contains('light')){
        btn.classList.remove('light');
        btn.classList.add('dark');
        btn.innerHTML = "light";
        document.body.style = "background: rgb(29, 29, 29)";
    }else if(btn.classList.contains('dark')){
        btn.classList.remove('dark');
        btn.classList.add('light');
        btn.innerHTML = "dark";
        document.body.style = "background: white";
    }
})