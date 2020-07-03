'use strict';

(function () {

  let topRateRepositoriesXHR = new XMLHttpRequest();
  let URLtoTopRateRepositoriesXHR = 'https://api.github.com/search/repositories?q=stars:>10000&sort=stars&per_page=10&page=1';
  topRateRepositoriesXHR.open('GET', URLtoTopRateRepositoriesXHR);
  topRateRepositoriesXHR.setRequestHeader('Accept', 'application/vnd.github.v3+json');
  topRateRepositoriesXHR.responseType = 'json';
  topRateRepositoriesXHR.send();

  let responseObj = {};

  topRateRepositoriesXHR.addEventListener('load', function() {
    responseObj = topRateRepositoriesXHR.response;
    window.generateListRepos.generateRepos(responseObj);
  });

})();
