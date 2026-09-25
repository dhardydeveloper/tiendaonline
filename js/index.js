// =========================
// movimiento banner principal
// =========================
const banners = document.querySelectorAll(".banner");

let indice = 0;

setInterval(function() {

    // Ocultar banner actual
    banners[indice].classList.remove("activo");

    // Pasar al siguiente
    indice++;

    // Si llega al último, volver al primero
    if (indice >= banners.length) {
        indice = 0;
    }

    // Mostrar siguiente banner
    banners[indice].classList.add("activo");

}, 4000);


// =========================
// Banner.deslizables 
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const mensaje = document.getElementById("mensaje");  // el texto del banner
  let pos = window.innerWidth; // arranca fuera de pantalla
  const velocidad = 2; // píxeles por frame

  function animar() {
    pos -= velocidad;  // lo mueve hacia la izquierda
    mensaje.style.transform = `translateX(${pos}px)`;   // aplica el movimiento

    // cuando termina de salir, reinicia
    if (pos < -mensaje.offsetWidth) {
      pos = window.innerWidth;
    }

    requestAnimationFrame(animar);   // repite esto en el siguiente frame (loop infinito)
  }

  animar();
});



// =========================
// PRODUCTOS DESTACADOS
// =========================

// Busca el contenedor de productos destacados
const contenedorDestacados = document.getElementById("productos-destacados");

// Verifica que el contenedor exista
if (contenedorDestacados) {

    // Seleccionamos los productos que queremos destacar
    const destacados = productos.filter(producto =>
        producto.id === 2 ||
        producto.id === 3 ||
        producto.id === 5 ||
        producto.id === 7
    );

    // Recorremos los productos destacados
    destacados.forEach(producto => {

        // Creamos un div para cada producto
        const elemento = document.createElement("div");

        // Agregamos la clase producto
        elemento.classList.add("producto");

        // Creamos el contenido HTML
        elemento.innerHTML = `

            <a href="producto.html?id=${producto.id}">

                <img src="${producto.imagen}" alt="${producto.nombre}">

            </a>

            <h3>${producto.nombre}</h3>

            <p>$${producto.precio.toLocaleString("es-CL")}</p>

            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                Añadir al carrito
            </button>

        `;

        // Agregamos el producto al contenedor
        contenedorDestacados.appendChild(elemento);

    });

}