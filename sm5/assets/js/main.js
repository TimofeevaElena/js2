let accordionArr = [
    {
        name: 'С какого возраста к нам можно?',
        text: 'Самые юные райдеры у нас 10 лет. Важно, что до 16 лет мы берем только со взрослыми под их ответственность. также есть ограничения по весу: от 40 кг до 100 кг '
    },
    {
        name: 'Сколько по времени длится катание?',
        text: 'Продолжительность одной поездки составляет 2 часа (с учетом переодевания в обе стороны).'
    },
    {
        name: 'Нужны ли права А-категории для управления мотоциклом?',
        text: 'Для аренды мотоцикла у нас, на прокат или тренировку категория А не нужна, потому что занятия проходят на специально подготовленных трассах, и все маршруты проложены вне дорог общественного пользования.'
    },
    {
        name: 'Отвечаете ли вы за здоровье клиентов?',
        text: 'Мы отвечаем за исправность выдаваемой мототехники, правильно подобранную по росту экипировку, годами отработанную тренировочную программу - за все то, что обеспечивает пассивную безопасность клиента. За свое здоровье может отвечать только сам человек за рулем.'
    },
];

// console.log(accordion)

let accordion = document.querySelector('.accordion')

for(let i = 0; i<accordionArr.length; i++){
    let accordionContent = document.createElement('div')
    accordionContent.className = 'accordion-content'
    accordion.append(accordionContent)

    let accordionName = document.createElement('div')
    accordionName.className = 'accordion-name'
    accordionName.innerHTML = accordionArr[i].name
    accordionContent.append(accordionName)

    let accordionText = document.createElement('div')
    accordionText.className = 'accordion-text'
    accordionText.innerHTML = accordionArr[i].text
    accordionContent.append(accordionText)
}

let accordionElements = document.querySelectorAll('.accordion-content')

for(let item of accordionElements){
    item.onclick = function(event){

        let target = event.target.closest('.accordion-name')

        if(!target) return

        let text = item.querySelector('.accordion-text')

        text.classList.toggle('active')
        target.classList.toggle('open')
    }
}

const modalElement = document.querySelector(".modal");
const counter = modalElement.querySelector(".modal__countdown");
const TIMER = 5;
let isOpen = false;
let i = TIMER;

setTimeout(openCounter, 10000);

document.querySelector(".counter__btn").addEventListener("click", openCounter);

modalElement.addEventListener("transitionend", () => {
  if (!isOpen) {
    i = TIMER;
    counter.textContent = TIMER;
    document.body.style.overflowY = "auto";
    document.body.style.paddingRight = 0;
  }
});

function openCounter() {
  isOpen = true;
  document.body.style.paddingRight =
    window.innerWidth - document.documentElement.clientWidth + "px";
  document.body.style.overflowY = "hidden";
  modalElement.classList.toggle("modal_active");

  const id = setInterval(() => {
    counter.textContent = --i;

    if (i === 0) {
      clearInterval(id);
      modalElement.classList.toggle("modal_active");
      isOpen = false;
    }
  }, 1000);
}
