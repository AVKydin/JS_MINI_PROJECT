// На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = JSON.parse(url.searchParams.get('info'));

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(responce => responce.json())
    .then(postInfo => {

        const id = postInfo.id;
        const title = postInfo.title;
        const body = postInfo.body;
        const userId = postInfo.userId;

        const postDiv = document.createElement('div');
        postDiv.classList.add('postDiv')
        document.body.appendChild(postDiv);
        const postId = document.createElement('p');
        postId.innerText = `id: ${id}`;
        const postTitle = document.createElement('p');
        postTitle.innerText = `title: ${title}`;
        const postBody = document.createElement('p');
        postBody.textContent = `body: ${body}`;
        const postUserId = document.createElement('p');
        postUserId.innerText = `userId: ${userId}`;

        const button = document.createElement('button');
        button.innerHTML = 'Вибрати інший пост'
        const a = document.createElement('a');

        a.href = `user-details.html?info=` + JSON.stringify(`${userId}`);
        a.appendChild(button)

        document.body.appendChild(a)
        const buttonHome = document.createElement('button');
        buttonHome.innerHTML = 'На головну'
        const aHome = document.createElement('a');
        aHome.href = `index.html`;
        aHome.classList.add('aHome');
        aHome.appendChild(buttonHome);
        document.body.append(aHome);

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(responce => responce.json())
            .then(comments => {
                    const comentsBlock = document.createElement('div');
                    comentsBlock.classList.add('comentsBlock')
                    document.body.appendChild(comentsBlock);
                for (const comment of comments) {
                    const comentBlock = document.createElement('div');
                    comentBlock.classList.add('comentBlock')
                    comentsBlock.appendChild(comentBlock);
                    const commentId = document.createElement('p');
                    commentId.innerText = `comment id: ${comment.id}`;
                    const commentPostId = document.createElement('p');
                    commentPostId.innerText = `comment postId: ${comment.postId}`;
                    const commentName = document.createElement('p');
                    commentName.innerText = `comment name: ${comment.name}`;
                    const commentBody = document.createElement('p');
                    commentBody.textContent = `comment body: ${comment.body}`;
                    const commentEmail = document.createElement('p');
                    commentEmail.textContent = `comment email: ${comment.email}`;

                    comentBlock.append(commentId, commentPostId, commentName, commentBody, commentEmail)
                }
            })


        postDiv.append(postId, postUserId, postTitle, postBody)
    })

//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.