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
  var center = { lat: -23.196109, lng: -46.803599 };


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

(function(){
  emailjs.init("RRFNdtNEG4R1PN24P"); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'service_fd6ri09';
  const templateID = 'template_awulm8g'; 

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          alert('Email enviado com sucesso!');
          this.reset();
      }, (err) => {
          alert('Erro ao enviar o email. Por favor, tente novamente.');
      });
});


