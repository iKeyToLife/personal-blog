const titleEl = document.querySelector(`#title`);
const contentEl = document.querySelector(`#content`);
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

    } else {
        mainEl.classList.remove(`unAuthorized`);
        mainEl.classList.add(`authorized`);
    }
}

init();