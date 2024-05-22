const userEl = document.querySelector(`#user`);
const titleEl = document.querySelector(`#title`);
const contentEl = document.querySelector(`#content`);
const submitBtn = document.querySelector(`#submit`);
const errorP = document.querySelectorAll(`#error`);

// Redirects to blog.html
function goToBlog() {
    const user = userEl.value.trim();
    const title = titleEl.value.trim();
    const content = contentEl.value.trim();

    if (!checkIsValid(user, title, content)) {
        return;
    }
    addNewMessage(user, title, content);
    currentUser();
    window.location.href = `./pages/blog.html`
}


// check valid input userName, title, content
function checkIsValid(user, title, content) {

    //clear errors
    [userEl, titleEl, contentEl].forEach(el => el.classList.remove('error-border'));
    errorP.forEach(error => error.textContent = ``);




    let isValid = true;



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


// create new message into localStorage
function addNewMessage(user, title, content) {

    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    let lastMessageId = 0;
    //check if we have something in localStorage
    if (messages.length > 0) {
        lastMessageId = messages[messages.length - 1].id;
    }

    const newMessageId = ++lastMessageId;

    let newMessage = {
        id: newMessageId,
        user: user,
        title: title,
        content: content
    };

    messages.push(newMessage);

    localStorage.setItem('messages', JSON.stringify(messages));
}

// create currentUser
function currentUser() {
    const currentUser = {
        userName: userEl.value,
        titleEl: titleEl.value,
        contentEl: contentEl.value
    }
    localStorage.setItem(`currentUser`, JSON.stringify(currentUser));
}

// clear localStorage message
function clearAllMessages() {
    localStorage.setItem('messages', ``);
}

// listner submit send message
submitBtn.addEventListener(`click`, goToBlog)