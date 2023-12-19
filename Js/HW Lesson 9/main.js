//
// - створити блок
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let myBlock1 = document.createElement('div');
// let myBlock2 = document.createElement('div');
// let myBlock3 = document.createElement('div');
// let myBlock4 = document.createElement('div');
// myBlock1.classList.add('wrap');
// myBlock1.textContent = 'Hello Pasha';
// myBlock2.classList.add('collapse');
// myBlock2.textContent = 'Hello Sasha';
// myBlock3.classList.add('alpha');
// myBlock3.textContent = 'Hello Masha';
// myBlock4.classList.add('beta');
// myBlock4.textContent = 'Hello Dasha';
//
// document.body.appendChild(myBlock1)
// document.body.appendChild(myBlock2)
// document.body.appendChild(myBlock3)
// document.body.appendChild(myBlock4)
//
// let clonedBlock1 = myBlock1.cloneNode(true)
// document.body.appendChild(clonedBlock1)
// let clonedBlock2 = myBlock2.cloneNode(true)
// document.body.appendChild(clonedBlock2)
// let clonedBlock3 = myBlock3.cloneNode(true)
// document.body.appendChild(clonedBlock3)
// let clonedBlock4 = myBlock4.cloneNode(true)
// document.body.appendChild(clonedBlock4)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let newArr = ['Main','Products','About us','Contacts'];
// let ulForLi = document.createElement('ul')
// for (let i = 0; i < newArr.length; i++) {
//     let liForArr = document.createElement('li')
//     liForArr.textContent = newArr[i]
//     ulForLi.appendChild(liForArr)
// }
// document.body.appendChild(ulForLi)

//
// - Є масив

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}];
//
// let div = document.createElement('div')
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let course = document.createElement('div')
//     course.textContent = 'Tittle - ' + coursesAndDurationArray[i].title + ' MonthDuration - ' + coursesAndDurationArray[i].monthDuration
//     div.appendChild(course)
//
// }
// document.body.appendChild(div)

//
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
//
// let div = document.createElement('div')
//
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let divClass = document.createElement('div')
//     divClass.classList.add('item')
//     let h1Class = document.createElement('h1')
//             h1Class.classList.add('heading')
//                 h1Class.textContent =  'Tittle: ' +  coursesAndDurationArray[i].title
//
//     let pClass = document.createElement('p')
//             pClass.classList.add('description')
//                 pClass.textContent = 'MonthDuration: ' + coursesAndDurationArray[i].monthDuration
//
//     div.appendChild(divClass)
//     div.appendChild(h1Class)
//     div.appendChild(pClass)
// }
// document.body.appendChild(div)

// =========================
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//

// let simpsonsFamily = document.createElement('h1')
// simpsonsFamily.textContent = "Simpsons Family"
// document.body.appendChild(simpsonsFamily)
//
// let div = document.createElement('div')
// for (let i = 0; i < simpsons.length; i++) {
//     let divClass = document.createElement('div')
//             divClass.classList.add('member')
//                 let h1Class = document.createElement('h3')
//                         h1Class.textContent =   simpsons[i].name + ' ' + simpsons[i].surname
//                             let pClassAge = document.createElement('p')
//                                     pClassAge.textContent = 'Age: ' + simpsons[i].age
//                                         let pClassInfo = document.createElement('p')
//                                                 pClassInfo.textContent = 'Info: ' + simpsons[i].info
//                                                     let imgElement = document.createElement('img')
//                                                         imgElement.src = simpsons[i].photo
//
//     div.appendChild(divClass)
//     div.appendChild(h1Class)
//     div.appendChild(pClassAge)
//     div.appendChild(pClassInfo)
//     div.appendChild(imgElement)
// }
// document.body.appendChild(div)

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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
// let div = document.createElement('div');
// for (let i = 0; i < coursesArray.length; i++) {
//
//
//     let divClassTitle = document.createElement('div');
//     divClassTitle.classList.add('title');
//     divClassTitle.textContent = 'Title: ' + coursesArray[i].title;
//
//     let containerDiv = document.createElement('div');
//     containerDiv.classList.add('container');
//
//
//     let durationContainer = document.createElement('div');
//     durationContainer.classList.add('duration-container');
//
//
//     let monthTextDiv = document.createElement('div');
//     monthTextDiv.classList.add('month-text');
//     monthTextDiv.textContent = 'Month Duration: ' + coursesArray[i].monthDuration;
//
//
//     let hourDurationDiv = document.createElement('div');
//     hourDurationDiv.classList.add('hour-text');
//     hourDurationDiv.textContent = 'Hour Duration: ' + coursesArray[i].hourDuration;
//
//
//     durationContainer.appendChild(monthTextDiv);
//     durationContainer.appendChild(hourDurationDiv);
//
//     let modulesContainer = document.createElement('div');
//     modulesContainer.classList.add('container-month-hour');
//
//
//     for (let j = 0; j < Math.min(3, coursesArray[i].modules.length); j++) {
//         let moduleDiv = document.createElement('div');
//         moduleDiv.classList.add('module-div');
//         moduleDiv.textContent = 'Module: ' + coursesArray[i].modules[j];
//         modulesContainer.appendChild(moduleDiv);
//     }
//
//
//     for (let j = 3; j < coursesArray[i].modules.length; j++) {
//         let moduleLi = document.createElement('li');
//         moduleLi.classList.add('li-for-module');
//         moduleLi.textContent = 'Module: ' + coursesArray[i].modules[j];
//         modulesContainer.appendChild(moduleLi);
//     }
//
//
//     div.appendChild(divClassTitle);
//     div.appendChild(containerDiv);
//     containerDiv.appendChild(durationContainer);
//     containerDiv.appendChild(modulesContainer);
//
//     document.body.appendChild(div);
//     }