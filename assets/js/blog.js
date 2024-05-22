const titleEl = document.querySelector(`#title`);
const contentEl = document.querySelector(`.content`);
const userEl = document.querySelector(`#user`);
const backLinkEl = document.querySelector(`#link-home`);
const mainEl = document.querySelector(`#isAuthorized`);


function clearCurrentUser() {

    localStorage.setItem(`currentUser`, ``);
}

backLinkEl.addEventListener(`click`, function (event) {
    event.preventDefault();
    clearCurrentUser();
    window.location.href = backLinkEl.href;
});

function init() {

    const currentUser = localStorage.getItem(`currentUser`);


    if (!currentUser) {
        mainEl.classList.remove(`authorized`);
        mainEl.classList.add(`unAuthorized`);

        let timeLeft = 5;

        const countdown = setInterval(() => {
            mainEl.textContent = `Redirecting in ${timeLeft}...`;
            timeLeft -= 1;

            if (timeLeft < 0) {
                clearInterval(countdown);
                window.location.href = backLinkEl.href;
            }
        }, 1000);
        return;
    } else {
        mainEl.classList.remove(`unAuthorized`);
        mainEl.classList.add(`authorized`);

        const messagesArr = JSON.parse(localStorage.getItem(`messages`))
        if (messagesArr === null) {
            return console.log(`No info about messages`);
        }
        for (let i = messagesArr.length - 1; i >= 0; i--) {
            getMessage(messagesArr[i]);
        }
    }
}


function getMessage(objMessage) {
    const ulElement = document.createElement(`ul`);
    ulElement.classList.add(`content-blog`);

    const userNameLiEl = document.createElement(`li`);
    userNameLiEl.id = `user`;
    userNameLiEl.textContent = `User: ${objMessage.user}`;


    const titleLiEl = document.createElement(`li`);
    titleLiEl.id = `title`;
    titleLiEl.textContent = `Title: ${objMessage.title}`;

    const contentLiEl = document.createElement(`li`);
    contentLiEl.id = `content`;
    contentLiEl.textContent = `Content: ${objMessage.content}`;

    ulElement.appendChild(titleLiEl);
    ulElement.appendChild(contentLiEl);
    ulElement.appendChild(userNameLiEl);

    contentEl.appendChild(ulElement);
}
init();