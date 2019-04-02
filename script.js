var images;
// var imagesArr;

function find() {
    images = document.querySelectorAll('.img-js');
    // imagesArr = [].slice.apply(images);
    console.log(images);
}

function subscribe() {
    [].forEach.call(images, (img) => {img.addEventListener('click', showCopyImg); });
    // images.forEach((img) => {img.addEventListener('click', showCopyImg); });    
    // for (var i = 0; )
}

function showCopyImg(event) {
    event.preventDefault();

    var item = event.target;
    // var imgCopy = event.target.cloneNode(true);
    var imgCopy = document.createElement('img');
    imgCopy.className = "imgBig";
    document.body.appendChild(imgCopy);
    imgCopy = item.cloneNode(false);


    // imgCopy.classList.add('imgBig');

   
    
    // imgCopy.addEventListener('click', returnImg);
    console.log(imgCopy);    
}

function returnImg(event) {
    var item = event.target;
    item.classList.remove('imgBig');
}

(function init() {
    find();
    subscribe();

})();