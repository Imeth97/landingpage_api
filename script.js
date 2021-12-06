let w = window.innerWidth;
let h = window.innerHeight;

let url_ = 'https://unsplash.it/' + w + '/' + h
console.log(url_)

fetch(url_).then(res => res.blob()).then(blob => {

    let img = document.createElement('img');
    img.src = URL.createObjectURL(blob);

    document.querySelector('body').appendChild(img);


})