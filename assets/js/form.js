const userEl = document.querySelector(`#user`);
const titleEl = document.querySelector(`#title`);
const contentEl = document.querySelector(`#content`);
const submitBtn = document.querySelector(`#submit`);
const errorP = document.querySelectorAll(`#error`);

// Redirects to blog.html
function goToBlog() {
    if (!checkContent()) {
        return;
    }

    localStorage.setItem('currentUser', currentUser())
    window.location.href = `./pages/blog.html`
}


// check valid input userName, title, content
function checkContent() {
    userEl.classList.remove('error-border');
    titleEl.classList.remove('error-border');
    contentEl.classList.remove('error-border');

    let user = userEl.value.trim();
    let title = titleEl.value.trim();
    let content = contentEl.value.trim();

    let isValid = true;


    errorP.forEach(error => error.textContent = ``);

    if (user === `` || title === `` || content === ``) {
        if (userEl.value.trim() === ``) {
            errorP[0].textContent = `The Username field cannot be empty, please fill it in.`
            userEl.classList.add(`error-border`);
        }
        if (titleEl.value.trim() === ``) {
            errorP[1].textContent = `The Title field cannot be empty, please fill it in.`
            titleEl.classList.add('error-border');
        }
        if (contentEl.value.trim() === ``) {
            errorP[2].textContent = `The Content field cannot be empty, please fill it in.`
            contentEl.classList.add('error-border');
        }
        isValid = false;
    }

    if (user.length > 50) {
        errorP[0].textContent = `The Username cannot be more than 50 characters.`;
        userEl.classList.add(`error-border`);
        isValid = false;

    } if (title.length > 80) {
        errorP[1].textContent = `The Title cannot be more than 80 characters.`;
        userEl.classList.add(`error-border`);
        isValid = false;

    } if (content.length > 600) {
        errorP[2].textContent = `The content cannot be more than 600 characters.`;
        userEl.classList.add(`error-border`);
        isValid = false;

    }
    return isValid;
}

// create currentUser
function currentUser() {
    return JSON.stringify({
        userName: userEl.value,
        titleEl: titleEl.value,
        contentEl: contentEl.value
    })
}

// listner submit send message
submitBtn.addEventListener(`click`, goToBlog)