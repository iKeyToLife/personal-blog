const themeBtn = document.querySelector(`#background-theme`);

function init() {
    if (localStorage.getItem(`theme`) === null) {
        localStorage.setItem(`theme`, true)
    }
    changeTheme()
}

function changeTheme() {
    if (localStorage.getItem(`theme`) === `true`) {
        document.documentElement.style.setProperty('--light', '#17171b');
        document.documentElement.style.setProperty('--dark', '#f8f9fa');
        document.documentElement.style.setProperty('--gray', '#fff');
        document.documentElement.style.setProperty('--gray-dark', 'antiquewhite');
        document.documentElement.style.setProperty('--antiquewhite', '#343a40');

    } else {
        document.documentElement.style.setProperty('--light', '#f8f9fa');
        document.documentElement.style.setProperty('--dark', '#17171b');
        document.documentElement.style.setProperty('--gray', '#6c757d');
        document.documentElement.style.setProperty('--gray-dark', '#343a40');
        document.documentElement.style.setProperty('--antiquewhite', 'antiquewhite');

    }
}

themeBtn.addEventListener(`click`, function () {
    if (localStorage.getItem(`theme`) === null || localStorage.getItem(`theme`) === `false`) {
        localStorage.setItem(`theme`, true);
    } else {
        localStorage.setItem(`theme`, false);
    }
    changeTheme();
})
init();