// =========================
// Banner.deslizables 
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const mensaje = document.getElementById("mensaje");
  let pos = window.innerWidth; // arranca fuera de pantalla
  const velocidad = 2; // píxeles por frame

  function animar() {
    pos -= velocidad;
    mensaje.style.transform = `translateX(${pos}px)`;

    // cuando termina de salir, reinicia
    if (pos < -mensaje.offsetWidth) {
      pos = window.innerWidth;
    }

    requestAnimationFrame(animar);
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