"use strict"

$(function () {
    $('#auth-button').click(function () {
        $('#modal-1').addClass('modal_active');
        $('body').addClass('hidden');
    });

    $('#registration-button').click(function () {
        $('#modal-2').addClass('modal_active');
        $('body').addClass('hidden');
    });

    $('.modal__close-button').click(function () {
        $('#modal-1, #modal-2').removeClass('modal_active');
        $('body').removeClass('hidden');
    });
});

$('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
});

let reg1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    reg2 = /^((\+7|7|8)+([0-9]){10})$/
    reg3 = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})$/
    reg4 = /[а-яА-Я]{6,30}/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            }else if (input.value === ''){
                    formAddError(input);
                    error++;
            }else if (input.classList.contains('_phone')){
                if (phoneTest(input)){
                    formAddError(input);
                    alert('Телефон должен соответствовать данному шаблону +79192569330');
                    error++;
                }
            }else if (input.classList.contains('_name')){
                if (nameTest(input)){
                    formAddError(input);
                    alert('Имя должно содержать только кириллицу');
                    error++;
                }
            }else  if (input.classList.contains('_psw')){
                if (passwordTest(input)){
                    formAddError(input);
                    alert('Пароль допускает только не менее 6 символов. Также должен содержать по ' +
                        'крайней мере одной цифры, заглавной или строчной буквы и по крайней ' +
                        'мере одного специального символа (символов, отличных от букв и цифр).');
                    error++;
                }
            }
            if (input.classList.contains('_pass')){
                if (input.value !== formReq[index+1].value){
                    formAddError(input);
                    alert('Пароли должны совпадать');
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function nameTest(input){
        return !reg4.test(input.value);
    }
    function emailTest(input) {
        return !reg1.test(input.value);
    }
    function phoneTest(input){
        return !reg2.test(input.value);
    }
    function passwordTest(input){
        return !reg3.test(input.value);
    }    
});

/*email.addEventListener("input", function (event) {
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      $('error').addClass('error_active');
    } else {
      $('error').removeClass('error_active');
    }
});*/

/*login.addEventListener("input", function (event) {
    if (login.validity.typeMismatch) {
      login.setCustomValidity("Неправильно введен логин!");
    } else {
      login.setCustomValidity("");
    }
});

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Неправильно введена электронная почта!");
    } else {
      email.setCustomValidity("");
    }
});

tel.addEventListener("input", function (event) {
    if (tel.validity.typeMismatch) {
      tel.setCustomValidity("Неправильно введен номер телефона!");
    } else {
      tel.setCustomValidity("");
    }
});

psw.addEventListener("input", function (event) {
    if (psw.validity.typeMismatch) {
      psw.setCustomValidity("Неправильно введен пароль!");
    } else {
      psw.setCustomValidity("");
    }
});

repeatPsw.addEventListener("input", function (event) {
    if (repeatPsw.validity.typeMismatch) {
      repeatPsw.setCustomValidity("Неправильно введен пароль!");
    } else {
      repeatPsw.setCustomValidity("");
    }
});*/