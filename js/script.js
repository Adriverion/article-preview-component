const shareButton = document.getElementById('shareButton');
const profileView = document.getElementById('profileView');
const socialView = document.getElementById('socialView');

shareButton.addEventListener('click', event => {
    socialView.classList.toggle('article__contact-box--hidden');
    shareButton.classList.toggle('article__button--dark');
});