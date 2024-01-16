fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => {

        let ul = document.getElementById('usersClick');
        for (const user of users) {

            let li = document.createElement('li');
            let p = document.createElement('p');
            let btn = document.createElement('button');

            p.innerHTML = `<b>ID:</b> ${user.id} <br> <b>Name:</b> ${user.name}`
            btn.innerText = 'SHOW';
            btn.addEventListener('click', function() {
                window.location.href = `index2.html`;
            });

            li.appendChild(p);
            ul.appendChild(li);
            li.appendChild(btn);
        }
    });

