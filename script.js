

let url_ = 'https://unsplash.it/3840/2160'
console.log(url_)
let img = document.getElementById('main_img');

fetch(url_).then(res => res.blob()).then(blob => {

    
    img.src = URL.createObjectURL(blob);

    


})