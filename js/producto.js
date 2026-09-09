// Obtener el ID desde la URL

const parametros = new URLSearchParams(window.location.search);

const idProducto = parseInt(parametros.get("id"));


// Buscar el producto

const producto = productos.find(p => p.id === idProducto);


// Verificar si existe

if (!producto) {

    document.querySelector(".detalle-producto").innerHTML = `
        <h2>Producto no encontrado</h2>
        <a href="productos.html">
            Volver a productos
        </a>
    `;

} else {

    // Rellenar información

    document.getElementById("imagen-producto").src = producto.imagen;

    document.getElementById("imagen-producto").alt = producto.nombre;

    document.getElementById("marca-producto").textContent = producto.marca;

    document.getElementById("nombre-producto").textContent = producto.nombre;

    document.getElementById("categoria-producto").textContent = producto.categoria;

    document.getElementById("precio-producto").textContent =
        "$" + producto.precio.toLocaleString("es-CL");

    document.getElementById("descripcion-producto").textContent =
        producto.descripcion;


    // Botón carrito

    document.getElementById("boton-carrito").addEventListener("click", function () {

        const cantidad = parseInt(
            document.getElementById("cantidad").value
        );

        agregarAlCarrito(
            producto.nombre,
            producto.precio,
            cantidad,
            producto.imagen
        );

    });


    // Mostrar recomendados

    mostrarRecomendados(producto);

}


