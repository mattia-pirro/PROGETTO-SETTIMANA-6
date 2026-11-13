const bodyPage = document.body;
const header = document.querySelector('.site-header');
const headerTitle = document.querySelector('.site-header-title');

function aggiornaScroll() {
    const scrolled = window.scrollY > 100;
    header.classList.toggle('scrolled', scrolled);
    headerTitle.classList.toggle('scrolled', scrolled);
}

window.addEventListener('scroll', aggiornaScroll);

bodyPage.classList.add('no-transition');
aggiornaScroll();

window.addEventListener('load', () => {
    aggiornaScroll();
    setTimeout(() => {
        bodyPage.classList.remove('no-transition')
    }, 100);
});