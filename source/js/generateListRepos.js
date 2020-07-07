'use strict';

(function () {

  window.generateListRepos = {
    generateRepos: generateRepos,
  };

  let repoTemplate = document.querySelector('#template-repo').content;

  function generateRepos(repos) {
    let fragment = new DocumentFragment();

    let lengthIteration = repos.items.length ;

    for (let i = 0; i < lengthIteration; i++) {
      let currentRepoObj = repos.items[i];

      let repoContainer = repoTemplate.cloneNode(true);
      let repo = repoContainer.querySelector('.repo');
      let repoName = repo.querySelector('.repo__name');
      let repoStars = repo.querySelector('.repo__stars');
      let repoLastCommit = repo.querySelector('.repo__data--last--commit');
      let repoLink = repo.querySelector('.repo__link');

      repoName.innerText = currentRepoObj.name;
      repoStars.innerText = currentRepoObj.stargazers_count;
      console.log(currentRepoObj.commits_url.slice(0, -6));
      repoLastCommit.innerText = window.getLastCommit.getLastDateCommit(currentRepoObj.commits_url.slice(0, -6));
      repoLink.innerText = currentRepoObj.html_url;

      fragment.appendChild(repoContainer);
    }

    let repoContainer = document.querySelector('.basic');
    repoContainer.appendChild(fragment);
    }
})();
