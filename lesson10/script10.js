// Events (События)
const btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerText ='Click me!';
btn.style.fontSize = '13px';

// подписываемся на событие "нажатия"
btn.addEventListener('click', () => {
    console.log('click');
});
let count = 0;
const f = () => {
    console.log('click 2');
count++;
if (count == 10) {
    // отписываемся от второго события "click"
    btn.removeEventListener('click', f);
}
};
btn.addEventListener('click', f);

// подписываемся на событие "скрол мыши"
//13.3333px
let fsize = parseFloat(btn.style.fontSize.substring(0, btn.style.fontSize.length -2));
const delta = 0.5; //+- 0.5 px для размера шрифта
btn.addEventListener('wheel', (event) => {
    const isUp = event.deltaY < 0;
    if(isUp) {
        fsize += delta;
    } else {
        fsize -= delta;
    }
    btn.style.fontSize = `${fsize}px`;

});

// кошки-мышки
const mouse = document.createElement('div');
mouse.classList.add('mouse');
mouse.style.width = '50px';
mouse.style.height = '50px';

function cssToFloat(v){
    return parseFloat(v.substring(0, v.length - 2));

}
//получаем размер мышки
const mouseWidth = cssToFloat(mouse.style.width);
const mouseHeight = cssToFloat(mouse.style.height);

function hrand(start, end) {
    return Math.trunc(Math.random()*(end-start)+start);
}
document.body.appendChild(mouse);
mouse.addEventListener('dblclick', ()=> {
    window.close();

});

setInterval(() => {
    // получаем размер окна просмотра
    const w = document.documentElement.clientWidth;
    const h = document.documentElement.clientHeight;
    //рандомим позицию мыши
    const right = hrand (0, w -mouseWidth);
    const botton = hrand (0, h - mouseHeight);
    mouse.style.right = `${right}px`;
    mouse.style.bottom = `${botton}px`;

},1000);
 function changeColor(color){
    document.body.style.background = color;

 }