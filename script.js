//Задача 1
//Счастливые билеты на JavaScript
function getLuckyTickets() {
    let res = []

    for ( let i = 1001; i < 999999; i++) {
        if (isLucky(i)) {
            res.push(i)
        }
    }
    return res
}

function isLucky(num) {
    let str = normalize(num);
    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    return sum1 === sum2
}

function normalize(num) {
    let str = String(num)

    if (str.length == 5) {
        str = '0' + str
    }
    if (str.length == 4) {
        str = '00' + str
    }
    return str
}
console.log(getLuckyTickets())


//**************************************************************

//Задача 2
//Дружественные числа на JavaScript
/*Примером таких чисел может служить пара 220 и 284. Собственными делителями числа 220 являются следующие числа: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110. Сумма этих чисел 284. Собственными делителями числа 284, являются числа 1, 2, 4, 71, 142 и сумма этих чисел равна 220.*/
/*Функция getFreindly, находит пары дружественных чисел в заданном промежутке от 1 до 9000 и возвращает их в виде двухмерного массива вида [ [220, 284], [1184, 1210], [2620, 2924] ].*/

function getOwnDivisors(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function getSum(num) {
    let sum = 0;
    for (let elem of num) {
        sum += elem;
    }
    return sum;
}

function getFreindly() {
    let arr = [];
    let min = 1;
    let max = 9000;
    for (; min < max; min++) {
        let sum = getSum(getOwnDivisors(min));
        let compare = getSum(getOwnDivisors(sum));
        if (min == compare && min != sum) {
            let tempArr = [];
            tempArr.push(min, sum);
            arr.push(tempArr);
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][0] == arr[i + 1].reverse()[0]) {
            arr.splice(i, 1);
        }
    }
    return arr;
    }
console.log(getFreindly());


//Задача 3
//Совершенное число на JavaScript
/*Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). Функция getPerfect, находит совершенные числа в диапазоне от 1 до 1000.*/

function getSum(num) {
    let sum = 0;
    for(let i = 1; i < num; i++){
        if(num % i == 0){
            sum += i;
        }
    }
    return sum;
}
let res = []
function getPerfect(num1,num2){
    for(let i = num1; i <= num2; i++){
        if(i == getSum(i)){
            res.push(i)
        }
    }
    return res
}
getPerfect(1,1000)
console.log(res)


//Задача 4
/*Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.*/
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let par = document.querySelector('#par')
let but = document.querySelector('#but')
function diskriminant(){
    let dis = ((Number(b.value))**2) - (4 * (Number(a.value)) * (Number(c.value)))
    console.log(dis)
    if (dis > 0 && a != 0){
        let root1 = (-(Number(b.value)) + (Math.sqrt(dis))) / (2 * (Number(a.value)))
        let root2 = (-(Number(b.value)) - (Math.sqrt(dis))) / (2 * (Number(a.value)))
        par.innerHTML = root1 + ', ' + root2
    } else if (dis == 0 && a != 0) {
        let root3 = (-(Number(b.value)) + (Math.sqrt(dis))) / (2 * (Number(a.value)))
        par.innerHTML = root3
    } else if (dis < 0 && a != 0) {
        par.innerHTML = 'корней нет'
    } else {
        par.innerHTML = 'уравнение не имеет решения, потому что a = 0'
    }
}
but.addEventListener('click', diskriminant)


//Задача 5
/*Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.*/
let par = document.querySelector('#par')
let inpt = document.querySelector('#inpt')
let timerId;
function func(){
    par.innerHTML = inpt.value
   timerId = setInterval(function (){
       par.innerHTML = --par.innerHTML
            if (par.innerHTML <= 0) {
                clearInterval(timerId);
            }
    }, 1000)
}
inpt.addEventListener('blur', func)

//Задача 6
/*Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.*/
let par = document.querySelector('#par')
par.style.fontSize = '100px'
function func(){
    setInterval(function (){
        if(par.style.color == 'green'){
            par.style.color = 'red'
        } else {
            par.style.color = 'green'
        }
    }, 1000)
}
par.addEventListener('click', func)


//Задача 7
/*Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие часики*/
let par = document.querySelector('#par')
function func(){
    function addZero(num) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }
    setInterval(function (){
        let now = new Date()
        par.innerHTML = addZero(now.getHours()) + ':' +
            addZero(now.getMinutes()) + ':' + addZero(now.getSeconds())
    }, 1000)
}
window.addEventListener('load', func)

//Задача 8
/*Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.*/
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let par = document.querySelector('#par')
let timerId; // сделаем переменную глобальной
function func(){

    timerId = setInterval(function() {
        par.innerHTML = ++par.innerHTML
        if (par.innerHTML <= 0) {
            clearInterval(timerId);
        }
    }, 1000);
    this.removeEventListener('click', func)
}
start.addEventListener('click', func);
stop.addEventListener('click', function() {
    clearInterval(timerId);
    start.addEventListener('click', func)
});

//Задача9
//Дан массив. Выведите его элементы в виде списка ul.

let arr = [1, 2, 3, 4, 5]
let body = document.querySelector('body')
let ul = document.createElement('ul')
for(let elem of arr){
    let li = document.createElement('li')
    li.innerHTML = elem
    ul.appendChild(li)
}
body.appendChild(ul)

/////////////////////////////////////////////////
//Задача10
//Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.

let arr = [1, 2, 3, 4, 5]
let parent = document.querySelector('#list')
let ul = document.createElement('ul')
for(let elem of arr) {
    let li = document.createElement('li')
    li.innerHTML = elem
    ul.appendChild(li)
    li.addEventListener('click', function func(){
        let input = document.createElement('input')
        input.value = li.innerHTML;
        li.innerHTML = '';
        li.appendChild(input);
        input.addEventListener('blur', function () {
            li.innerHTML = this.value;
            li.addEventListener('click', func);
        })
        li.removeEventListener('click', func)
    })
}
parent.appendChild(ul)

/////////////////////////////////////////////////
//Задача11
//Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

let arr = [1, 2, 3, 4, 5]
let parent = document.querySelector('#list')
let ul = document.createElement('ul');
let inputAdd = document.createElement('input');
inputAdd.placeholder = 'добавить пункт';

inputAdd.addEventListener('blur', function(){
    let li = document.createElement('li');
    li.innerHTML = inputAdd.value;
    inputAdd.value = ''
    li.addEventListener('click', createInput);
    ul.appendChild(li);
});

for(let elem of arr)
{
    let li = document.createElement('li');
    li.innerHTML = elem;
    li.addEventListener('click', createInput);
    ul.appendChild(li);
}

function createInput() {
    let input = document.createElement('input');
    input.value = this.innerHTML;
    input.addEventListener('blur', ()=>{
        this.innerHTML = input.value;
        this.addEventListener('click', createInput);
    })
    this.innerHTML='';
    this.appendChild(input);
    this.removeEventListener('click', createInput);
}

parent.appendChild(ul);
parent.appendChild(inputAdd);


/////////////////////////////////////////////////
//Задача12
//Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

let arr = [1, 2, 3, 4, 5];
let parent = document.querySelector('#list')
let ul = document.createElement('ul');
let inputAdd = document.createElement('input');
inputAdd.placeholder = 'добавить пункт';

inputAdd.addEventListener('blur', ()=> {
    createLi(inputAdd.value);
});

for(let elem of arr) {
    createLi(elem);
}

function createLi(elem) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = elem;
    span.addEventListener('click', createInput);
    li.appendChild(span);
    let remove = document.createElement('a');
    remove.innerHTML = 'удалить';
    remove.href = '#';
    remove.style.marginLeft = '10px'
    remove.style.textDecoration = 'none'
    li.appendChild(remove);
    ul.appendChild(li);

    remove.addEventListener('click', function() {
        remove.parentElement.parentElement.removeChild(li);
    });
}

function createInput() {
    let input = document.createElement('input');
    input.value = this.innerHTML;
    input.addEventListener('blur', ()=>{
        this.innerHTML = input.value;
        this.addEventListener('click', createInput);
    })
    this.innerHTML='';
    this.appendChild(input);
    this.removeEventListener('click', createInput);
}

parent.appendChild(ul);
parent.appendChild(inputAdd);

/////////////////////////////////////////////////
//Задача13
//Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.

let arr = [1, 2, 3, 4, 5];
let parent = document.querySelector('#list')
let ul = document.createElement('ul');
let inputAdd = document.createElement('input');
inputAdd.placeholder = 'добавить пункт';

inputAdd.addEventListener('blur', ()=> {
    createLi(inputAdd.value);
});

for(let elem of arr) {
    createLi(elem);
}

function createLi(elem) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = elem;
    span.addEventListener('click', createInput);
    li.appendChild(span);

    let remove = document.createElement('a');
    remove.innerHTML = 'удалить';
    remove.href = '#';
    remove.style.marginLeft = '10px'
    remove.style.textDecoration = 'none'
    li.appendChild(remove);

    let crossOut = document.createElement('a')
    crossOut.innerHTML = 'перечеркнуть'
    crossOut.href = '#'
    crossOut.style.marginLeft = '10px'
    crossOut.style.textDecoration = 'none'
    li.appendChild(crossOut);

    crossOut.addEventListener('click', function (){
        span.classList.add('cross_out')
    })

    ul.appendChild(li);

    remove.addEventListener('click', function() {
        remove.parentElement.parentElement.removeChild(li);
    });
}

function createInput() {
    let input = document.createElement('input');
    input.value = this.innerHTML;
    input.addEventListener('blur', ()=>{
        this.innerHTML = input.value;
        this.addEventListener('click', createInput);
    })
    this.innerHTML='';
    this.appendChild(input);
    this.removeEventListener('click', createInput);
}

parent.appendChild(ul);
parent.appendChild(inputAdd);
