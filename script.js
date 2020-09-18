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
