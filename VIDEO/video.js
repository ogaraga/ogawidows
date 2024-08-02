// Functionality of both photos and videos
const photo = document.querySelector('.photo-gala'),
video = document.querySelector('.video'),
foto = document.querySelector('#foto'),
vid = document.querySelector('#vid'),
imags = document.querySelector('.imags');

foto.addEventListener('click', ogaPhoto);
vid.addEventListener('click', ogaVideo);


function ogaPhoto(){
    photo.style.display = 'block';
    foto.style.display = 'none';
    video.style.display = 'none';
    vid.style.display = 'block';
    vid.style.marginRight = '-10px';
}
function ogaVideo(){
    photo.style.display = 'none';
    foto.style.display = 'block';
    video.style.display = 'block';
    vid.style.display = 'none';
    foto.style.marginLeft = '-10px';
}