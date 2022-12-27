window.onload = function () {
    const images = document.querySelectorAll('.img1');
    let i = 0;
    setInterval(function() {
        images[i].style.display = 'none';
        i = (i + 1) % images.length;
        images[i].style.display = 'block';
    }, 3000);
}
const form = document.getElementById('contact-form');
const responseContainer = document.getElementById('response');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    responseContainer.innerHTML = 'Por favor rellena todos los campos del formulario';
    return;
  }

  fetch('https://formspree.io/f/xjvdbzjp', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        responseContainer.innerHTML = 'Mensaje enviado con éxito';
      } else {
        responseContainer.innerHTML = 'Ocurrió un error al enviar el mensaje';
      }
    })
    .catch((error) => {
      console.error(error);
      responseContainer.innerHTML = 'Ocurrió un error al enviar el mensaje';
    });
});

  