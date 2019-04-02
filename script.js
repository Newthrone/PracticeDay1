var images;

function find() {
    images = document.querySelectorAll('.img-js');
}

function subscribe() {
    [].forEach.call(images, (img) => {img.addEventListener('click', showCopyImg); });
}

function showCopyImg(event) {
    event.preventDefault();
    var src = event.target.getAttribute('src');
    var imgCopy = document.createElement('img');
    imgCopy.className = "imgBig";
    imgCopy.setAttribute('src', src);
    document.body.appendChild(imgCopy);
    imgCopy.addEventListener('click', deleteCopyImg);
}

function deleteCopyImg(event) {
    var item = event.target;
    document.body.removeChild(item)
}

(function init() {
    find();
    subscribe();
})();