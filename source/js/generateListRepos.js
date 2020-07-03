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
        repoName.innerText = currentRepoObj.name;

        fragment.appendChild(repoContainer);
      }

    let repoContainer = document.querySelector('.basic');
    repoContainer.appendChild(fragment);
    }
})();
