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
// Banner.deslizables - carla acuña 
// =========================

// "DOMContentLoaded" espera a que todo el HTML de la página esté cargado 
// antes de ejecutar el código, así nos aseguramos de que el elemento #mensaje ya exista
document.addEventListener("DOMContentLoaded", () => {
  const mensaje = document.getElementById("mensaje");  // el texto del banner
  // Guardamos en "mensaje" el <span id="mensaje"> del banner promocional (cuotas, envío gratis, etc.) 
  // Se ingresa en el body de cada pagina

  let pos = window.innerWidth; // arranca fuera de pantalla
 

  const velocidad = 2; // píxeles por frame
  // Cuántos píxeles se mueve el texto hacia la izquierda en cada actualización (cada frame)

  function animar() {
    // Esta función se llama una y otra vez para crear el efecto de desplazamiento continuo

    pos -= velocidad;  // lo mueve hacia la izquierda
    // Resta la velocidad a la posición actual, haciendo que el texto avance de derecha a izquierda

    mensaje.style.transform = `translateX(${pos}px)`;   // aplica el movimiento
    // translateX mueve el elemento horizontalmente sin afectar el resto del layout de la página,
    // usando la propiedad CSS "transform" directamente desde JavaScript

    // cuando termina de salir, reinicia
    if (pos < -mensaje.offsetWidth) {
      // "mensaje.offsetWidth" es el ancho real del texto en píxeles.
      // Si "pos" es menor a ese ancho en negativo, significa que el texto 
      // ya salió completamente por el lado izquierdo de la pantalla
      pos = window.innerWidth;
      // Al cumplirse esa condición, se reinicia la posición al borde derecho, 
      // haciendo que el texto vuelva a entrar y el ciclo se repita infinitamente
    }

    requestAnimationFrame(animar);   // repite esto en el siguiente frame (loop infinito)
    // requestAnimationFrame le pide al navegador que vuelva a ejecutar "animar" 
    // en el próximo refresco de pantalla (usualmente 60 veces por segundo), 
    // logrando así una animación fluida sin usar setInterval
  }

  animar();
  // Llama a la función por primera vez para iniciar el ciclo de animación
});



// =========================
// PRODUCTOS DESTACADOS
// =========================

// Buscamos en el HTML el elemento que tiene
// el id="productos-destacados"
const contenedorDestacados = document.getElementById("productos-destacados");

// Verificamos que el contenedor exista.
// Esto evita errores en otras páginas que no tengan
// la sección de productos destacados.
if (contenedorDestacados) {

    // Filtramos el arreglo "productos" y seleccionamos
    // solamente los productos que queremos mostrar
    // como destacados.
    //
    // En este caso seleccionamos los productos:
    // ID 2, ID 3, ID 5 e ID 7.
    const destacados = productos.filter(producto =>
        producto.id === 2 ||
        producto.id === 3 ||
        producto.id === 5 ||
        producto.id === 7
    );

    // Recorremos uno por uno los productos destacados.
    destacados.forEach(producto => {

        // Creamos un nuevo elemento <div> para cada producto.
        const elemento = document.createElement("div");

        // Le agregamos la clase CSS "producto".
        // Esta clase permite aplicar los estilos
        // que tenemos definidos en style.css.
        elemento.classList.add("producto");

        // Creamos el contenido HTML del producto.
        elemento.innerHTML = `
            
            <!-- Imagen del producto -->
            <!-- Al hacer clic en la imagen se abre
                 la página de detalle del producto -->
            <a href="producto.html?id=${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </a>

            <!-- Nombre del perfume -->
            <h3>${producto.nombre}</h3>

            <!-- Precio del perfume -->
            <p>$${producto.precio.toLocaleString("es-CL")}</p>

            <!-- Botón para agregar el producto al carrito -->
            <button class="boton-destacado">
                Añadir al carrito
            </button>
        `;

        // Buscamos el botón que acabamos de crear
        // dentro del elemento del producto.
        const boton = elemento.querySelector(".boton-destacado");

        // Le agregamos una acción al botón.
        // Esta función se ejecutará cuando el usuario
        // presione "Añadir al carrito".
        boton.addEventListener("click", function() {

            // Mostramos información en la consola
            // para comprobar que el botón está funcionando.
            console.log("BOTÓN PRESIONADO");

            // Mostramos el nombre del producto.
            console.log(producto.nombre);

            // Mostramos el precio del producto.
            console.log(producto.precio);


            // =========================
            // OBTENER EL CARRITO
            // =========================

            // Buscamos si ya existe un carrito guardado
            // en localStorage.
            //
            // Si no existe, creamos un arreglo vacío [].
            let carrito = JSON.parse(
                localStorage.getItem("carritoAURA")
            ) || [];


            // =========================
            // BUSCAR PRODUCTO EXISTENTE
            // =========================

            // Revisamos si el producto que estamos agregando
            // ya se encuentra dentro del carrito.
            const productoExistente = carrito.find(
                item => item.nombre === producto.nombre
            );


            // =========================
            // SI EL PRODUCTO YA EXISTE
            // =========================

            if (productoExistente) {

                // Si el producto ya estaba en el carrito,
                // aumentamos su cantidad en 1.
                productoExistente.cantidad += 1;

            } else {

              
                carrito.push({
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: 1
                });
            }


            // =========================
            // GUARDAR EL CARRITO
            // =========================

            // Convertimos el arreglo "carrito" a texto JSON
            // y lo guardamos en localStorage.
         
            localStorage.setItem(
                "carritoAURA",
                JSON.stringify(carrito)
            );


            
            alert("¡Producto agregado al carrito!");

        });

       
        contenedorDestacados.appendChild(elemento);

    });
}













