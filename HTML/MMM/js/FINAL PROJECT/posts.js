// pid = postId
// pCont = postContent

const pId = new URLSearchParams(window.location.search).get('post');
const pCont = document.getElementById('post-info');
async function fetchAndRenderDetails(pid) {
    const p = await fetchDetails(pid);
    renderDetails(p);
    const c = await fetchComments(pid);
    renderComments(c);
}
async function fetchDetails(pid) {
    const r = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`);
    return r.json();
}
async function fetchComments(pid) {
    const r = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}/comments`);
    return r.json();
}
function renderDetails(post) {
    pCont.appendChild(createDetails(post));
}
function createDetails(obj) {
    const el = document.createElement('div');
    el.id = 'post-details-info';
    for (const [k, v] of Object.entries(obj)) {
        const item = document.createElement('p');
        item.innerHTML = `<b>${k}</b>: ${v}`;
        el.appendChild(item);
    }
    return el;
}
function renderComments(comments) {
    pCont.appendChild(createComments(comments));
}
function createComments(comments) {
    const el = document.createElement('div');
    el.id = 'comments-container';
    for (const c of comments) {
        const item = document.createElement('p');
        item.innerHTML = `<b>Comment by ${c.name}</b>: ${c.body}`;
        el.appendChild(item);
    }
    return el;
}

fetchAndRenderDetails(pId);
