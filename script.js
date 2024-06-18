document.querySelectorAll('.galeria img').forEach(image => {
  image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
}

function initMap() {
  var center = { lat: -23.198270420025054, lng: -46.804195554635825 };
  var mapOptions = {
      center: center,
      zoom: 17
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Recanto do Pardal'
});
}

document.addEventListener('DOMContentLoaded', initMap);
