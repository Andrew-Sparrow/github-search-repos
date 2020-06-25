'use strict';

(function () {
  var TIMEOUT_SEND_FORM = 3000; // ms
  var URLtoSendForm = 'https://api.github.com/search/repositories';
  var form = document.querySelector('.ad-form');

  function submitForm(evt) {
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open('GET', URLtoSendForm, true);

    xhr.addEventListener('load', function () {

      if (xhr.status === 200 && xhr.readyState === 4) {
        window.successSendForm.successSendForm();
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

    xhr.send(formData);
    evt.preventDefault();
  }

  form.addEventListener('submit', submitForm);

})();
