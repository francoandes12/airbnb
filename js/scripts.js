document.addEventListener('DOMContentLoaded', () => {
  //obtener la imagen
  const imagenHero = document.querySelector('.hero')
  //inicializar las variables
  let i = 0
  let tiempo = 0
  //Arreglo con imagenes de fondo
  const imagenes = ['arriba2.jpg', 'arriba.jpg']
  setInterval(() => {
    imagenHero.style.backgroundPositionY = '-' + tiempo + 'px'
    if (tiempo > 40) {
      tiempo = 0
      imagenHero.style.backgroundImage = 'url(../img/' + imagenes[i] + ')'
      if (i === imagenes.length - 1) {
        i = 0
      } else {
        i++
      }
    }
    tiempo++
  }, 100)
  //boton flotante en el footer
  const btnFlotante = document.querySelector('.btn-flotante')
  btnFlotante.addEventListener('click', (e) => {
    //prevenimos default
    e.preventDefault()
    //ejecutamos el siguiente codigo
    const footer = document.querySelector('#footer')
    if (footer.classList.contains('activo')) {
      //si lo contiene ejecuta este codigo
      footer.classList.remove('activo')
      btnFlotante.textContent = 'Idioma y Moneda'
      btnFlotante.classList.remove('activo')
    } else {
      footer.classList.add('activo')
      btnFlotante.textContent = 'X cerrar'
      btnFlotante.classList.add('activo')
    }
  })
})
