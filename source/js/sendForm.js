'use strict';

(function () {
  let TIMEOUT_SEND_FORM = 3000; // ms
  let form = document.querySelector('.form');

  function submitForm(evt) {
    // let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    let inputField = document.querySelector(".inputField");
    let URLtoSendForm = `https://api.github.com/search/repositories?q=${inputField.value}&per_page=10&sort=stars`;

    xhr.open('GET', URLtoSendForm, true);
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {

      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log(xhr.response);
      } else {
        window.errorSendForm.onError();
      }
    });

    xhr.addEventListener('error', function () {
      window.errorSendForm.onError();
    });

    xhr.timeout = TIMEOUT_SEND_FORM;

    xhr.addEventListener('timeout', function () {
      window.errorSendForm.onError();
    });

    // xhr.send(formData);
    xhr.send();
    evt.preventDefault();
  }

  form.addEventListener('submit', submitForm);

})();
