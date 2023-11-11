const list = document.querySelector('.news')

async function getPosts(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    let data = await res.json()
    for (let i = 0; i < data.length; i++){
        list.insertAdjacentHTML('beforeend', renderPost(data[i]))
    }
}

function renderPost(post){
    return `
        <div class="post">
            <div class="post-id">
                <p class="title">`+ post.title+` </p>
                <p class="id">`+ post.id+`</p>
            </div>
            <p class="body">`+ post.body+` </p>
        </div>
    `
}
getPosts()