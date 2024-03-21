window.addEventListener('load', () => {

    // Code sourced from YouTube tutorial by Rajnish Katharotiya 
    // @ https://github.com/RajnishKatharotiya/share-data-between-html-pages

    const interests = localStorage.getItem('INTERESTS');
    document.getElementById('interest-name').innerHTML = interests;
})