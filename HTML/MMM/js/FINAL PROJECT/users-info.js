const userIdParam = new URLSearchParams(window.location.search).get('id')
const userContainer = document.getElementById('info')

fetch(`https://jsonplaceholder.typicode.com/users/${userIdParam}`)
    .then(response => response.json())
    .then(user => {
        const userList = document.createElement('ul')
        buildUserList(user, userList)
        userContainer.append(userList, createButton('Posts of Current User', fetchUserPosts))
    })
function buildUserList(userObject, container) {
    for (const [key, value] of Object.entries(userObject)) {
        const listItem = document.createElement('li')
        listItem.innerHTML = `${key}: <b>${typeof value === 'object' ? '' : value}</b>`
        container.appendChild(listItem)
        if (typeof value === 'object') {
            const subList = document.createElement('ul')
            container.appendChild(subList)
            buildUserList(value, subList)
        }
    }
}
function createButton(text, onClick) {
    const button = document.createElement('button')
    button.innerText = text
    button.onclick = onClick
    return button;
}

function fetchUserPosts() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userIdParam}/posts`)
        .then(response => response.json())
        .then(renderUserPosts)
}
function renderUserPosts(posts) {
    const postContainer = document.createElement('div')
    postContainer.classList.add('post-container')
    for (const post of posts) {
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        const postTitle = document.createElement('p')
        postTitle.innerHTML = `<b>Info about post:</b> ${post.title}`
        const postDetailsButton = createButton('Detailed information about post', () => {
            location.href = `./index3.html?post=${post.id}`
        });

        postDiv.append(postTitle, postDetailsButton)
        postContainer.appendChild(postDiv)
    }

    userContainer.appendChild(postContainer)
}