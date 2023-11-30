// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// // function calculatedAandBround(a,b){
// //     let roundOfArea = a * b;
// //     return roundOfArea;
// // }
// // let res = calculatedAandBround(30,128)
// // console.log(res)
//
// // творити функцію яка обчислює та повертає площу кола з радіусом r
//
// // function calculatedRoundArea(r){
// //     let areaOfCircle = r * r * Math.PI;
// //     return areaOfCircle;
// // }
// // let res = calculatedRoundArea(2, 6)
// // console.log(res)
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// // function calculatedAreaOfCylinder(r,h){
// //     let areaOfCylinder = 2 * Math.PI * Math.pow(r, 2) + 2 * Math.PI * r * h;
// //     return areaOfCylinder ;
// // }
// // let res = calculatedAreaOfCylinder(2,6)
// // console.log(res)
//
// // створити функцію яка приймає масив та виводить кожен його елемент
//
// // function newMasive(){
// //     console.log(arguments);
// // }
// // newMasive([2,'Hello - Okten', 322, 'Oh i pridymaly ti argymenty s funkciyamu'])
//
//
//
// // створити функцію яка створює параграф з текстом. Текст задати через аргумент
// // function newMasiveWithP(paragraph){
// //     document.write(`<p>${paragraph}</p>`)
// // }
// // newMasiveWithP('Hello Okten')
//
// // function ulWithTrippleLi(txt){
// //     document.write(`<ul>
// //         <li>${txt}</li>
// //         <li>${txt}</li>
// //         <li>${txt}</li>
// //         </ul>`);
// // }
// // ulWithTrippleLi('Hello Okten')
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// // function ulLiAndNumber(text,numbers){
// //     document.write(`<ul>`);
// //     for (let i = 0; i < numbers; i++) {
// //         document.write(`<li>${text}</li>`)
// //     }
// //     document.write(`</ul>`)
// // }
// // ulLiAndNumber('Hello Okten', 3)
//
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// // let gadjets =[
// //     {phone: 'iPhone', model: '8', memory: '128', price: '300', status: true},
// //     {phone: 'Samsung', model: 'Galaxy S8', memory: '64', price: '700', status: false},
// //     {phone: 'iPhone', model: 'X', memory: '256', price: '350', status: true},
// //     {phone: 'Xiomi', model: 'Redmi note 9', memory: '512', price: '499', status: true},
// //     {phone: 'Huawei', model: 'Huawei p40 lite', memory: '64gb', price: '644', status: false},
// //     {phone: 'iPhone', model: '12 MAX', memory: '64', price: '440', status: false},
// //     {phone: 'Samsung', model: '8', memory: '128gb', price: '300', status: true},
// //     {phone: 'Xiomi', model: '12s ultra', memory: '128gb', price: '800', status: false},
// // ]
// //
// // function gadjetsOfMasive(array){
// //     for (const arrayElement of array) {
// //         console.log(arrayElement)
// //     }
// // }
// // gadjetsOfMasive(gadjets)
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// // 'Для кожного об'єкту окремий блок.
//
//
// // let users = [
// //     {id: 783, name: 'Pavel', age: 19},
// //     {id: 222, name: 'Oleg', age: 44},
// //     {id: 144, name: 'Vlad', age: 24},
// // ]
//
// // function iterator(usersarray){
// //     for (let i = 0; i < users.length; i++) {
// //         const user = users[i];
// //         document.write(`<div>
// //                         <p>id: ${user.id} Name: ${user.name} Age: ${user.age}</p>
// //
// //         </div>`)
// // }
// // }
// // iterator(users)
//
// // - створити функцію яка повертає найменьше число з масиву
//
// // let numbers=[11, 22, 33, 44, 55, 66]
// //
// // function numberMin(minarray){
// //     let minNumber = minarray[0];
// //     for (let i = 0; i < minNumber.length; i++) {
// //         const minNumberElement = minNumber[i];
// //         if (minNumberElement < minNumber){
// //             minNumber = minNumberElement;
// //         }
// //     }
// //     console.log(minNumber)
// //         }
// // numberMin(numbers)
//
// // створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// // let numbers=[11, 22, 33,]
// //
// //
// // function sum(arr) {
// //     let x = 0
// //     for (const arrElement of arr) {
// //         x += arrElement;
// //     }
// //     return x;
// // }
// //
// // console.log(sum(numbers))
//
//
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// // let loop =[11,22,33,44]
// // function swap(arr, index0, index1){
// //
// //     let x = arr[index0];
// //     arr[index0] = arr[index1];
// //     arr[index1] = x;
// // }
// // swap(loop, 0, 1)
// // console.log(loop)
//
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// // let exchange = [1000, 'USD', 38.5]
// function xchange(sumUAH,currencyValues,exchangeCurrency){
//     let xsumUah = sumUAH;
//     let ykursvalut = exchangeCurrency;
//     if(currencyValues === 'USD') {
//         let z = sumUAH / exchangeCurrency;
//         return z;
//     }
// }
//
// console.log(xchange(100500, 'USD',38))
