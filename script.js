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

/////////////////////////////////////////////////////////
//Задача14
//Дан следующий массив с работниками, выведите этих работников в HTML таблице.

let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];
let parent = document.querySelector('#parent')
let table = document.createElement('table')
for (let empl of employees) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = empl.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = empl.age;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = empl.salary;
    tr.appendChild(td3);

    table.appendChild(tr);
}
parent.appendChild(table)

/////////////////////////////////////////////////
//Задача15
//Добавьте ячейкам созданной таблицы возможность редактирования

let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];
let parent = document.querySelector('#parent')
let table = document.createElement('table')
function createInput(){
    let input = document.createElement('input')
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);
        input.addEventListener('blur',  () =>{
            this.innerHTML = input.value;
            this.addEventListener('click', createInput);
        })
        this.removeEventListener('click', createInput)
}
for (let empl of employees) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = empl.name;
    tr.appendChild(td1);
    td1.addEventListener('click', createInput)

    let td2 = document.createElement('td');
    td2.innerHTML = empl.age;
    tr.appendChild(td2)
    td2.addEventListener('click', createInput);

    let td3 = document.createElement('td');
    td3.innerHTML = empl.salary;
    tr.appendChild(td3);
    td3.addEventListener('click', createInput)

    table.appendChild(tr);
}
parent.appendChild(table)

/////////////////////////////////////////////////
//Задача16
//Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];
let parent = document.querySelector('#parent')
let table = document.createElement('table')
function createInput(){
    let input = document.createElement('input')
    input.value = this.innerHTML;
    this.innerHTML = '';
    this.appendChild(input);
    input.addEventListener('blur',  () =>{
        this.innerHTML = input.value;
        this.addEventListener('click', createInput);
    })
    this.removeEventListener('click', createInput)
}
for (let empl of employees) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = empl.name;
    tr.appendChild(td1);
    td1.addEventListener('click', createInput)

    let td2 = document.createElement('td');
    td2.innerHTML = empl.age;
    tr.appendChild(td2)
    td2.addEventListener('click', createInput);

    let td3 = document.createElement('td');
    td3.innerHTML = empl.salary;
    tr.appendChild(td3);
    td3.addEventListener('click', createInput)

    let td4 = document.createElement('td');
    let a = document.createElement('a');
    a.innerHTML = 'Удалить';
    a.href = '#';
    td4.appendChild(a);
    tr.appendChild(td4)

    a.addEventListener('click', function(event) {
        tr.parentElement.removeChild(tr);
        event.preventDefault();
    });

    table.appendChild(tr);
}

parent.appendChild(table)

/////////////////////////////////////////////////
//Задача17
//Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.

let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];
let parent = document.querySelector('#parent')

let table = document.createElement('table');
table.id = 'table';
for(let empl of employees) {
    addNewEmp(empl.name,empl.age,empl.salary);
}

parent.appendChild(table);

let tds = document.querySelectorAll('#table td');
for (let td of tds) {
    td.addEventListener('click', function func(){
        if(!td.classList.contains('del')) {
            let input = document.createElement('input');
            input.value = td.innerHTML;
            td.innerHTML = '';
            td.appendChild(input);

            input.addEventListener('blur', ()=>{
                td.innerHTML = input.value;
                td.addEventListener('click', func);
            });
            td.removeEventListener('click', func);
        }
    });
}

let inputName = document.createElement('input');
let inputAge = document.createElement('input');
let inputSalary = document.createElement('input');
let button = document.createElement('button');
button.innerHTML = 'Добавить';

button.addEventListener('click', ()=> addNewEmp(inputName.value, inputAge.value, inputSalary.value));

inputName.placeholder = 'Введите имя';
inputAge.placeholder = 'Введите возраст';
inputSalary.placeholder = 'Введите зарплату';

function addNewEmp(name,age,salary) {

    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = age;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = salary;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    let remove = document.createElement('a');
    remove.innerHTML = 'удалить';
    remove.href = '#';
    remove.addEventListener('click', function(event){
        event.preventDefault();
        tr.parentElement.removeChild(tr)});
    td4.appendChild(remove);
    tr.appendChild(td4);

    table.appendChild(tr);
}

parent.appendChild(inputName);
parent.appendChild(inputAge);
parent.appendChild(inputSalary);
parent.appendChild(button);

/////////////////////////////////////////////////
//Задача18
//Дан следующий массив с работниками, выведите на экран каждого работника в своем теге li тега ul.

let parent = document.querySelector('#parent')
let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

for (let empl of employees){
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = empl.name
    ul.appendChild(li1)

    let li2 = document.createElement('li')
    li2.innerHTML = empl.age
    ul.appendChild(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = empl.age
    ul.appendChild(li3)

    parent.appendChild(ul)
}

/////////////////////////////////////////////////
//Задача19
//Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.

let parent = document.querySelector('#parent')
let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
    {name: 'employee4', age: 33, salary: 700},
];

for (let empl of employees){
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = empl.name
    ul.appendChild(li1)

    let li2 = document.createElement('li')
    li2.innerHTML = empl.age
    ul.appendChild(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = empl.salary
    ul.appendChild(li3)

    parent.appendChild(ul)
}

let lis = document.querySelectorAll('li')
for(let li of lis){
    li.addEventListener('click', createInput)
}

function createInput(){
    let input = document.createElement('input')
    input.value = this.innerHTML
    this.innerHTML = ''
    this.appendChild(input)
    input.addEventListener('blur',()=>{
        this.innerHTML = input.value
        this.addEventListener('click', createInput);

    })
    this.removeEventListener('click', createInput);
}

/////////////////////////////////////////////////
//Задача20
//Добавьте в конец каждого тега li ссылку на удаление этого li из списка.

let parent = document.querySelector('#parent')
let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
    {name: 'employee4', age: 33, salary: 700},
];

for (let empl of employees){
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = empl.name
    ul.appendChild(li1)

    let li2 = document.createElement('li')
    li2.innerHTML = empl.age
    ul.appendChild(li2)

    let li3 = document.createElement('li')
    li3.innerHTML = empl.salary
    ul.appendChild(li3)

    let remove = document.createElement('a');
    remove.innerHTML = 'удалить';
    remove.href = '#';
    remove.style.textDecoration = 'none'
    ul.appendChild(remove);

        remove.addEventListener('click', function() {
        ul.parentElement.removeChild(ul);
    });

    parent.appendChild(ul)
}

let lis = document.querySelectorAll('li')
for(let li of lis){
    li.addEventListener('click', createInput)
}

function createInput(){
    let input = document.createElement('input')
    input.value = this.innerHTML
    this.innerHTML = ''
    this.appendChild(input)
    input.addEventListener('blur',()=>{
        this.innerHTML = input.value
        this.addEventListener('click', createInput);

    })
    this.removeEventListener('click', createInput);
}

/////////////////////////////////////////////////
//Задача21
//Под списком сделайте форму для добавление нового работника.

let parent = document.querySelector('#parent')
let parent2 = document.querySelector('#parent2')
let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
    {name: 'employee4', age: 33, salary: 700},
];

for (let empl of employees){
    addEmployee(empl.name, empl.age, empl.salary)
}

function createInputEdit(){
    let input = document.createElement('input')
    input.value = this.innerHTML
    this.innerHTML = ''
    this.appendChild(input)
    input.addEventListener('blur',()=>{
        this.innerHTML = input.value
        this.addEventListener('click', createInputEdit);

    })
    this.removeEventListener('click', createInputEdit);
}

let inputName = document.createElement('input');
inputName.placeholder = 'Name';

let inputAge = document.createElement('input');
inputAge.placeholder = 'Age';

let inputSalary = document.createElement('input');
inputSalary.placeholder = 'Salary';

let but = document.createElement('button')
but.innerHTML = 'Add employee'

but.addEventListener('click', function (){
    addEmployee(inputName.value,inputAge.value,inputSalary.value);
    inputName.value = '';
    inputAge.value = '';
    inputSalary.value = '';
})

parent2.appendChild(inputName)
parent2.appendChild(inputAge)
parent2.appendChild(inputSalary)
parent2.appendChild(but)

function addEmployee(name, age, salary){
    let ul = document.createElement('ul')
    let li1 = document.createElement('li')
    li1.innerHTML = name

    let li2 = document.createElement('li')
    li2.innerHTML = age

    let li3 = document.createElement('li')
    li3.innerHTML = salary

    let remove = document.createElement('a');
    remove.innerHTML = 'удалить';
    remove.href = '#';
    remove.style.textDecoration = 'none'

    remove.addEventListener('click', function() {
    ul.parentElement.removeChild(ul);
    });

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(remove);
    parent.appendChild(ul)
}

let lis = document.querySelectorAll('li')
for(let li of lis){
    li.addEventListener('click', createInputEdit)
}

/////////////////////////////////////////////////
//Задача22
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// С помощью комбинаций функций createTableByArr, normalizeArr и convertArr создайте из приведенного массива таблицу размером 5 колонок. Добавьте созданную таблицу в какой-нибудь див.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let cols = 5;

function convertArr(arr,cols) {
    let resArr = [];
    let rows = arr.length/cols;
    for(let k = 0; k < rows; k++) {
        let subArr = [];
        for(let i = 0; i < cols; i++) {
            let x = arr.shift();
            if(x != undefined)
                subArr.push(x);
        }
        resArr.push(subArr);
    }
    return resArr;
}

function normalizeArr(arr, cols, aggregate)
{
    let lastSubArr = arr.pop();
    for(let i = 0; i < cols; i++)
    {
        if(lastSubArr[i] == undefined)
            lastSubArr.push(aggregate);
    }
    arr.push(lastSubArr);
    return arr;
}

function createTableByArr(arr) {
    let table = document.createElement('table');
    for (let el of arr) {
        let tr = document.createElement('tr')
        for (let subel of el) {
            let td = document.createElement('td')
            td.innerHTML = subel
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    return table
}
let twoDimArr = convertArr(arr, cols);
let normalTwoDimArr = normalizeArr(twoDimArr, cols, '-');

let table = createTableByArr(normalTwoDimArr);
let div = document.querySelector('#elem');
div.appendChild(table);


//Задача23
// Сумма колонок HTML таблицы через CSS селектор

let button = document.querySelector('#button')

button.addEventListener('click', function (){
    let table = document.querySelector('#table')

    let trs = table.querySelectorAll('tr')
    let colsNum = trs[0].querySelectorAll('td').length

    let resultTr = document.createElement('tr')
    table.appendChild(resultTr)

    for (let i = 0; i < colsNum; i++){
        let tdNumber = i+1;
        let tds = table.querySelectorAll('td:nth-child('+ tdNumber+ ')')
        let sum = 0;

        for (let j = 0; j < tds.length; j++){
            sum += Number(tds[j].innerHTML)
        }

        let resultTd = document.createElement('td')
        resultTd.innerHTML = sum;
        resultTr.appendChild(resultTd)
    }
})

/////////////////Анализатор текста на JavaScript////////////////////////////////
//Задача24
//Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов, сколько в тексте символов, сколько в тексте символов за вычетом пробелов, и также вывелось сообщение о процентном содержании каждого символа в тексте. Сделайте 4 чекбокса, которые будут регулировать, какие именно параметры показывать.

let textarea = document.querySelector('#textarea');
let par = document.querySelector('#par')

let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let checkbox4 = document.getElementById("checkbox4");

checkbox1.addEventListener('click', () => par.innerHTML = '' );
checkbox2.addEventListener('click', () => par.innerHTML = '' );
checkbox3.addEventListener('click', () => par.innerHTML = '' );
checkbox4.addEventListener('click', () => par.innerHTML = '' );
textarea.addEventListener('click', () => par.innerHTML = '' );

textarea.addEventListener('blur', function (){

    if (checkbox1.checked){
        par.innerHTML += 'Введено слов: '+ textarea.value.split(' ').length
    }

    if (checkbox2.checked){
        par.innerHTML += '<br />'+ 'Введено символов: ' + textarea.value.split('').length
    }

    if (checkbox3.checked){
        par.innerHTML += '<br />' + 'Введено символов без пробела: ' + textarea.value.replace(/ /g, "").length
    }

    if (checkbox4.checked){
        let allSymbols = "abcdefghijklmnopqrstuvwxyz0123456789йцукенгшщзхъфывапролджэячсмитьбю`-,.=~@#$%^&*()_+;'][\!:ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮQWERTYUIOPASDFGHJKLZXCVBNM";
        let symbolsStatistic = '';
        let symbols = textarea.value.replace(/ /g, "").split("");
        for(let symbol of allSymbols) {
            if(symbols.indexOf(symbol) != -1)
                symbolsStatistic += '<br>' + getSymbolPercent(symbols,symbol)+'<br>';
        }
        function getSymbolPercent(arr,symbol) {
            return  symbol + ': ' + Math.round(arr.filter(letter => letter === symbol).length / arr.length * 100) + ' %';
        }
        par.innerHTML += '<br />' + 'Процентное соотношение каждого символа ' + symbolsStatistic
    }
})

/////////////////////////////////////////////////
//Задача25
//Игра угадай число на JavaScript
//В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
//
// Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.

let par = document.querySelector('#par')
let input = document.querySelector('#input')
let num;

function getRandomInt() {
    num =  Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
getRandomInt()

function func(){
    if (Number(input.value) > num){
        par.innerHTML = 'Введите число поменьше'
    } else if(Number(input.value) < num){
        par.innerHTML = 'Введите число побольше'
    } else {
        par.innerHTML = 'Поздравляю! Вы угадали число'
    }
}

input.addEventListener('blur', func)


/////////////////////////////////////////////////
//Задача26
//Игра угадай ячейку на JavaScript
// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

let div = document.querySelector('#elem');
let array = [];

function shuffle(){
    let j, temp;
    let arr = []
    for(let num = 1; num <= 100; num++){
        arr.push(num)
    }
    for(let i = 0; i < 10; i++){
        j = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        array.push(temp)
    }
}
shuffle()

function createTable(rows, cols) {
    let table = document.createElement('table');
    let count = 1
    for (let k = 0; k < rows; k++) {
            let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            td.innerHTML = count++

            tr.appendChild(td)

            td.addEventListener('click', function (){
                for (let el of array) {
                    if (td.innerHTML == el){
                        td.classList.add('color2')
                    } else {
                        td.classList.add('color1')
                    }
                }

                let greenTds = document.querySelectorAll('table td.color2')
                if (greenTds && greenTds.length == 10){
                    let p = document.createElement('p')
                    p.innerHTML = 'Вы нашли все ячейки'
                    div.appendChild(p)
                }
            })
        }
    table.appendChild(tr)
    }
    return table
}
div.appendChild(createTable(10, 10));
