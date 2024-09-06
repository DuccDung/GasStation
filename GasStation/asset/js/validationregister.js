var errorElementName = document.querySelector('.form-message--name');
var errorElementEmail = document.querySelector('.form-message--email');
var errorElementPass = document.querySelector('.form-message--password');
var errorElementPass_ = document.querySelector('.form-message--password_');
var fullname = document.querySelector('#fullname');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var password_ = document.querySelector('#password_');


fullname.onblur = function () {
    if (!fullname.value.trim()) {
        errorElementName.innerText = 'Vui lòng nhập trường này!';
        errorElementName.parentElement.classList.add('invalid');
    }
}
fullname.onclick = function () {
    errorElementName.innerText = '';
    errorElementName.parentElement.classList.remove('invalid');
}


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
password_.onblur = function () {
    if (password.value != password_.value) {
        errorElementPass_.innerText = 'Mật khẩu không chính xác!'
        errorElementPass_.parentElement.classList.add('invalid');
    }
}
password_.onclick = function () {
    errorElementPass_.innerText = ''
    errorElementPass_.parentElement.classList.remove('invalid');
}

