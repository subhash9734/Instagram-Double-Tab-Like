
const clickArea = document.querySelector('.inner-div');

const clickCount = document.querySelector('.clickCount');

let likeCount = 0;

{/* <i class="fa fa-heart"></i> */ }

const showHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa');
    heart.classList.add('fa-heart');
    clickArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 800);
}

clickArea.addEventListener('dblclick', (e) => {
    clickCount.innerHTML = ++likeCount;
    showHeart(e);
});