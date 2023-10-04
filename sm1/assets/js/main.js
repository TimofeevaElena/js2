let Btn = document.querySelectorAll('.btn')
let Menu = document.querySelectorAll('.content')

Btn.forEach(btn => {
    btn.addEventListener('click', function(event){
        let thisBtn = event.target.closest('.btn');
        let submenu = thisBtn.closest('.menu').querySelector('.content');
        
        Btn.forEach(btn=>{
            if(btn!==thisBtn){
                btn.classList.remove('btn--active')
            }
        });
        Menu.forEach(thi => {
            if(thi!==submenu){
                thi.classList.remove('content--active');
            }
        })
        submenu.classList.toggle('content--active');
        thisBtn.classList.toggle('btn--active');

    })
})
document.addEventListener('click',(event)=>{
    if(!event.target.closest('.menus')){
        Btn.forEach(btn=>{
            btn.classList.remove('btn--active')
        });
        Menu.forEach(thi => {
                thi.classList.remove('content--active');
        })
    }
})