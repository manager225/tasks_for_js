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
