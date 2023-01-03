const images = document.querySelectorAll('.complete-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnail1 = document.getElementById('thumbnail1');
const thumbnail2 = document.getElementById('thumbnail2');
const thumbnail3 = document.getElementById('thumbnail3');
const thumbnail4 = document.getElementById('thumbnail4');
const thumbnail5 = document.getElementById('thumbnail5');
const thumbnail6 = document.getElementById('thumbnail6');
const thumbnail7 = document.getElementById('thumbnail7');
let i = 0;
let n = 0;

/**
 * Presentación de imágenes y miniaturas correspondientes
 * @param {Array} images - Las imágenes a mostrar en la presentación
 * @param {Array} thumbnails - Las miniaturas correspondientes a las imágenes
 * @param {number} interval - El intervalo entre transiciones de la presentación en milisegundos
 */
setInterval(function () {
  images[i].style.display = 'none';
  thumbnails[n].style.border = 'none';
  i = (i + 1) % images.length;
  n = (n + 1) % thumbnails.length;
  images[i].style.display = 'block';
  thumbnails[n].style.border = '4px solid pink'
}, 4000);

/**
 * Muestra la primera imagen del rail y su miniatura y oculta el resto cuando se hace clic en thumbnail1
 * @param {HTMLElement} thumbnail1 - El elemento thumbnail1 al que se le agrega el manejador de evento
 * @param {Array} images - Las imágenes a mostrar7ocultar en la presentación
 * @param {Array} thumbnails - Las miniaturas a mostrar/ocultar en la presentación
 */
thumbnail1.addEventListener('click', () => {
  i = 0;
  n = 0;
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[i].style.display = 'block';
  thumbnails.forEach(thumbnail => {
    thumbnail.style.border = 'none';
  });
  thumbnails[n].style.border = '4px solid pink';
});

thumbnail2.addEventListener('click', () => {
  i = 1;
  n = 1;
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[i].style.display = 'block';
  thumbnails.forEach(thumbnail => {
    thumbnail.style.border = 'none';
  });
  thumbnails[n].style.border = '4px solid pink';
});

thumbnail3.addEventListener('click', () => {
  i = 2;
  n = 2;
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[i].style.display = 'block';
  thumbnails.forEach(thumbnail => {
    thumbnail.style.border = 'none';
  });
  thumbnails[n].style.border = '4px solid pink';
});

thumbnail4.addEventListener('click', () => {
  i = 3;
  n = 3;
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[i].style.display = 'block';
  thumbnails.forEach(thumbnail => {
    thumbnail.style.border = 'none';
  });
  thumbnails[n].style.border = '4px solid pink';
});

thumbnail5.addEventListener('click', () => {
  i = 4;
  n = 4;
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[i].style.display = 'block';
  thumbnails.forEach(thumbnail => {
    thumbnail.style.border = 'none';
  });
  thumbnails[n].style.border = '4px solid pink';
});

thumbnail6.addEventListener('click', () => {
  i = 5;
  n = 5;
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[i].style.display = 'block';
  thumbnails.forEach(thumbnail => {
    thumbnail.style.border = 'none';
  });
  thumbnails[n].style.border = '4px solid pink';
});

thumbnail7.addEventListener('click', () => {
  i = 6;
  n = 6;
  images.forEach(image => {
    image.style.display = 'none';
  });
  images[i].style.display = 'block';
  thumbnails.forEach(thumbnail => {
    thumbnail.style.border = 'none';
  });
  thumbnails[n].style.border = '4px solid pink';
});


/**
 * Envía un formulario de contacto utilizando la biblioteca fetch.
 * @param {HTMLFormElement} form - El formulario de contacto
 * @param {HTMLElement} responseContainer -El elemento donde se mostrará el resultado del envío del formulario
 */
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