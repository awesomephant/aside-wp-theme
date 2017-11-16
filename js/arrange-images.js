function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

const imageCount = 1;
const gridSize = 20;
var imageContainer = document.getElementById('js-imageContainer');

var setBackground = function () {
    console.log(imageContainer)
    let src = imageUrls[getRandomInt(0, imageUrls.length - 1)];
    imageContainer.style.backgroundImage = 'url(' + src + ')';
}
setBackground()