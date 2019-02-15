function getArticleGenerator(articles) {
    let content = document.getElementById('content');

    return function () {
        if (articles.length > 0) {
            let article = document.createElement('article');
            let pElement = document.createElement('p');
            pElement.textContent = `${articles.shift()}`;
            article.appendChild(pElement);
            content.appendChild(article);
        }
    };
}