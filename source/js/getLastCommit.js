'use strict';


(function () {

  window.getLastCommit = {
    getLastDateCommit: getLastDateCommit,
  };

  function sortCommits(arrayOfCommits) {
    return arrayOfCommits.sort(function (first, second) {
      // console.log(first);
      return new Date(second.commit.author.date) - new Date(first.commit.author.date);
    })
  }

  function getLastDateCommit(url) {
    let commitsXHR = new XMLHttpRequest();

    commitsXHR.open('GET', url);
    commitsXHR.responseType = 'json';
    commitsXHR.send();

    let responseObj = {};

    let sortedCommits = [];

    commitsXHR.addEventListener('load', function () {
      responseObj = commitsXHR.response;

      sortedCommits = sortCommits(responseObj);
      // console.log(responseObj);
    });

    console.log(sortedCommits[0]);
    return sortedCommits[0];
  }
})();
