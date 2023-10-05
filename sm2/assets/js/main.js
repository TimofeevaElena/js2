let slides  = document.querySelector('.slides')
let slide = document.getElementById('slide')
let position = 0

right.addEventListener('click', function(){
    position = position+slide.offsetWidth;
    if(position>slides.offsetWidth-1){
        position = 0
    }
    slides.style.left = -position + "px"
})
left.addEventListener('click', function(){
    position = position-slide.offsetWidth
    if(position<0){
        position = slides.offsetWidth-slide.offsetWidth
    }
    slides.style.left = -position + "px"
})