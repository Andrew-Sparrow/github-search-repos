'use strict';

(function () {
  let templateError = document.querySelector('#error').content;
  let main = document.querySelector('main');

  window.errorSendForm = {
    onError: onError,
  };

  function clickOutsideError(evt) {
    let isClickOutside = evt.target.contains(evt.target.firstElementChild);

    if (isClickOutside) {
      document.querySelector('main div.error').remove();
      window.removeEventListener('click', clickOutsideError);
      window.removeEventListener('keydown', pressEscapeError);
    }
  }

  function pressEscapeError(evt) {
    let key = evt.key;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
      main.querySelector('div.error').remove();
      window.removeEventListener('click', clickOutsideError);
      window.removeEventListener('keydown', pressEscapeError);
    }
  }

  function onError() {

    let containerError = templateError.cloneNode(true);
    let errorButton = containerError.querySelector('.error__button');
    main.appendChild(containerError);

    errorButton.addEventListener('click', function () {
      document.querySelector('main div.error').remove();
    });

    window.addEventListener('keydown', pressEscapeError);
    window.addEventListener('click', clickOutsideError);
  }

})();
