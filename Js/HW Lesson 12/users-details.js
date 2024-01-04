// Отримати ID користувача з параметрів URL
const userId = new URLSearchParams(window.location.search).get('id');
function userDatails() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => showUserDetails (user))
}
function showUserDetails(user) {
    const userInfoElement = document.getElementById('userInfo')
    const userInfo = document.createElement('div')
    userInfo.innerHTML = `
    <p>ID: ${user.id}</p>
    <p>Name: ${user.name}</p>
    <p>UserName: ${user.username}</p>
    <p>Email: ${user.email}</p>
    <h2>Adress</h2>
    <p>Street: ${user.address.street}</p>
    <p>Suite: ${user.address.suite}</p>
    <p>City ${user.address.city}</p>
    <p>ZipCode: ${user.address.zipcode}</p>
    <p>Geo:</p>
    <p>Lat: ${user.address.geo.lat}</p>
    <p>lng: ${user.address.geo.lng}</p>
    <p>Phone: ${user.phone}</p>
    <p>Website: ${user.website}</p>
    <h2>Place of Work</h2>
    <p>Company: ${user.company.name}</p>
    <p>CatchPhrase: ${user.company.catchPhrase}</p> 
    <p>Bs: ${user.company.bs}</p>
    
    
    
    
    `
userInfoElement.appendChild(userInfo)
}
userDatails()

