// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world'
// console.log(str1.length)
//
// let str2 ='lorem ipsum'
// console.log(str2.length)
//
// let str3 = 'javascript is cool'
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world'
// console.log(str1.toUpperCase())
//
// let str2 ='lorem ipsum'
// console.log(str2.toUpperCase())
//
// let str3 = 'javascript is cool'
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD'
// console.log(str1.toLocaleLowerCase())
// let str2 = 'LOREM IPSUM'
// console.log(str2.toLocaleLowerCase())
// let str3 = 'JAVASCRIPT IS COOL'
// console.log(str3.toLocaleLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.replaceAll('  ', ''))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//     let str = 'Ревуть воли як ясла повні';
//     let newArr = str.split(' ')
//     console.log(newArr)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0]
// let stringArray = array.map(String);
// console.log(stringArray)
// console.log(array)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


//     let nums = [11,21,3];
// let sort = (num, direction)=> {
//      if(direction === 'ascending'){
//      return num.sort((a, b) => a - b);
//      } else if (direction === 'descending'){
//          return num.sort((a,b)=> b - a);
//      }
// };
// console.log(sort(nums, 'ascending'))
// console.log(sort(nums, 'descending'))
//
// ==========================

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// let monthDescending = coursesAndDurationArray.sort((course1, course2)=>{
//     return course2.monthDuration - course1.monthDuration
// });
// console.log(monthDescending)

// let monthDuration = coursesAndDurationArray.filter(coursesAndDurationArray => coursesAndDurationArray.monthDuration > 5)
// console.log(monthDuration)

// let newArr = coursesAndDurationArray.map((course,index) =>{
//     return {
//         id: index + 1,
//         tittle: course.title,
//         monthDuration: course.monthDuration
//     };
// });
// console.log(newArr)



// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
// let values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
// let color = ['red', 'black']
// function createPoker()  {
//     let poker = [];
//
//     for (const cardsuit of cardSuits) {
//         for (const value of values) {
//             let color;
//             if (cardsuit === 'diamond' || cardsuit === 'heart') {
//                 color = 'red';
//             } else {
//                 color = 'black';
//             }
//
//             let card = {
//                 cardSuit: cardsuit,
//                 value: value,
//                 color: color
//             };
//
//             poker.push(card);
//         }
//     }
//     return poker;
// }
//
// let poker = createPoker();

// let spadeAce = poker.find(card => card.cardSuit === 'spade' && card.value === 'A');
// console.log(spadeAce)
//
// let allSix = poker.filter( card => card.value === '6');
// console.log(allSix)

// let allRed = poker.filter(card => card.color === 'red');
// console.log(allRed)

// let allDiamonds = poker.filter(card => card.cardSuit === 'diamond');
// console.log(allDiamonds)

// let allClubs = poker.filter(card => card.cardSuit === 'clubs' && card.value > '9' );
// console.log(allClubs);
// const allClubs = poker.filter(card => card.cardSuit === 'clubs' && values.indexOf(card.value) >= values.indexOf('9'));
// console.log(allClubs)
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// const cardsForSuits = poker.reduce((accumulator, card) => {
//     if (!accumulator[card.cardSuit]) {
//         accumulator[card.cardSuit] = [];
//     }
//     accumulator[card.cardSuit].push(card);
//     return accumulator;
// }, {});
//
// console.log(cardsForSuits);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// let coursesWithSass = coursesArray.filter(course => course.modules.indexOf('sass') !== -1);
//
// console.log(coursesWithSass)
//
//
// let coursesWithDocker = [];
// coursesArray.forEach(course => {
//     let hasDocker = false;
//     for (let i = 0; i < course.modules.length; i++) {
//         if (course.modules[i] === 'docker') {
//             hasDocker = true;
//             break;
//         }
//     }
//     if (hasDocker) {
//         coursesWithDocker.push(course);
//     }
// });
//
// console.log(coursesWithDocker);