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

document.addEventListener("DOMContentLoaded", function() {
  const popupImage = document.querySelector(".popup-image");
  const popupImgElement = document.querySelector(".popup-content img");
  const popupVideoElement = document.querySelector(".popup-content video");
  const closeBtn = document.querySelector(".popup-image span");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const mediaItems = document.querySelectorAll(".imagem-container img, .imagem-container video");

  let currentIndex = 0;

  function openPopup(index) {
      currentIndex = index;
      const currentItem = mediaItems[currentIndex];
      if (currentItem.tagName.toLowerCase() === "img") {
          popupImgElement.src = currentItem.src;
          popupImgElement.style.display = "block";
          popupVideoElement.style.display = "none";
      } else if (currentItem.tagName.toLowerCase() === "video") {
          popupVideoElement.querySelector("source").src = currentItem.querySelector("source").src;
          popupVideoElement.load();
          popupVideoElement.style.display = "block";
          popupImgElement.style.display = "none";
      }
      popupImage.style.display = "flex";
  }

  function closePopup() {
      popupImage.style.display = "none";
      popupVideoElement.pause();
  }

  function showPrevItem() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : mediaItems.length - 1;
      openPopup(currentIndex);
  }

  function showNextItem() {
      currentIndex = (currentIndex < mediaItems.length - 1) ? currentIndex + 1 : 0;
      openPopup(currentIndex);
  }

  mediaItems.forEach((item, index) => {
      item.addEventListener("click", () => openPopup(index));
  });

  closeBtn.addEventListener("click", closePopup);
  prevBtn.addEventListener("click", showPrevItem);
  nextBtn.addEventListener("click", showNextItem);

  popupImage.addEventListener("click", function(event) {
      if (event.target === popupImage) {
          closePopup();
      }
  });
});

