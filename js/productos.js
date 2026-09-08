// ========================================
// OBTENER ID DEL PRODUCTO
// ========================================

const parametros = new URLSearchParams(
    window.location.search
);

const idProducto = parseInt(
    parametros.get("id")
);


// ========================================
// BUSCAR PRODUCTO
// ========================================

const producto = productos.find(
    producto => producto.id === idProducto
);


// ========================================
// MOSTRAR PRODUCTO
// ========================================

if (producto) {

    // Imagen
    document.getElementById("imagen-producto").src =
        producto.imagen;

    document.getElementById("imagen-producto").alt =
        producto.nombre;


    // Marca
    document.getElementById("marca-producto").textContent =
        producto.marca;


    // Nombre
    document.getElementById("nombre-producto").textContent =
        producto.nombre;


    // Categoría
    document.getElementById("categoria-producto").textContent =
        "Categoría: " + producto.categoria;


    // Precio
    document.getElementById("precio-producto").textContent =
        "$" + producto.precio.toLocaleString("es-CL");


    // Descripción
    document.getElementById("descripcion-producto").textContent =
        producto.descripcion;


    // Botón carrito
    document.getElementById("boton-carrito")
        .addEventListener("click", function () {

            const cantidad =
                parseInt(
                    document.getElementById("cantidad").value
                );

            alert(
                producto.nombre +
                " agregado al carrito. Cantidad: " +
                cantidad
            );

        });


} else {

    // Producto inexistente

    document.querySelector("main").innerHTML = `

        <div class="producto-no-encontrado">

            <h1>Producto no encontrado</h1>

            <p>
                El perfume que estás buscando
                no existe.
            </p>

            <a href="productos.html">
                Volver a productos
            </a>

        </div>

    `;

}