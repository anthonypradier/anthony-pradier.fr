const articles = document.querySelectorAll('.article');
const nbArticlesOnPage = 4;
const nbArticlesWritten = articles.length;

console.log(articles.length);

if(nbArticlesWritten > nbArticlesOnPage) {
    console.log('Il y a plus de 2 articles');
    console.log(articles[0]);
    for(i = 0; i < nbArticlesOnPage - 1; i++) {
        articles[i].classList.add('none');
    }
}
