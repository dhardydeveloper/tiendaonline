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