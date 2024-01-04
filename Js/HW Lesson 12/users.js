fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users)=> {
        for (const user of users) {
        let ul = document.getElementById('List')
        let li  = document.createElement('li')
        let a = document.createElement('a')
        a.innerText = `ID: ${user.id}  Name: ${user.username}`
        a.href = './user-details.html?id=' + `${user.id}`
        li.appendChild(a)
        ul.appendChild(li)
        }
    })