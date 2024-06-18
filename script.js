document.querySelectorAll('.galeria img').forEach(Image=>{
  Image.onclick = () =>{
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = Image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick=() =>{
  document.querySelector('.popup-image').style.display = 'none';

}