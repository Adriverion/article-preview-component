const shareButton = document.getElementById('shareButton');
const profileView = document.getElementById('profileView');
const socialView = document.getElementById('socialView');

shareButton.addEventListener('click', event => {
    let hidden = 'article__contact-box--hidden';

    if (profileView.classList.contains(hidden)) {
        socialView.classList.add(hidden);
        profileView.classList.remove(hidden);
    } else {
        socialView.classList.remove(hidden);
        profileView.classList.add(hidden);
    }
    shareButton.classList.toggle('article__button--dark');
});