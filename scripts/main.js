// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
fetch('http://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        console.log(users)
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('usersDiv');
        for (const user of users) {

            const userDiv = document.createElement('div');
            userDiv.classList.add('userDiv')
            const userName = document.createElement('h3');
            const button = document.createElement('button');
            button.innerHTML = 'More info'
            const a = document.createElement('a');
            userName.innerText = `id - ${user.id}, name - ${user.name}`;
            a.href = `user-details.html?info=` + JSON.stringify(user.id);
            a.appendChild(button)
            userDiv.append(userName,a)
            usersDiv.append(userDiv);
        }
        document.body.appendChild(usersDiv);
    })

//
// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
