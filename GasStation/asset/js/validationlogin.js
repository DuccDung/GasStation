var errorElementEmail = document.querySelector('.form-message--email');
var errorElementPass = document.querySelector('.form-message--password');
var email = document.querySelector('#email');
var password = document.querySelector('#password');

email.onblur = function () {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email.value)) {
        errorElementEmail.innerText = 'Vui lòng nhập lại email!'
        errorElementEmail.parentElement.classList.add('invalid');
    }
}
email.onclick = function () {
    errorElementEmail.innerText = ''
    errorElementEmail.parentElement.classList.remove('invalid');
}


password.onblur = function () {
    if (password.value.length <= 8) {
        errorElementPass.innerText = 'Vui lòng nhập mật khẩu > 8 kí tự!'
        errorElementPass.parentElement.classList.add('invalid');
    }
}
password.onclick = function () {
    errorElementPass.innerText = ''
    errorElementPass.parentElement.classList.remove('invalid');
}

