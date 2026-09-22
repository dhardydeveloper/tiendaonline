// ==========================================
// 1. LISTA DE PRODUCTOS INICIAL
// ==========================================
const productosBase = [
    {
        id: 1,
        nombre: "Acqua Di Gio Hombre 100ml",
        marca: "Giorgio Armani",
        categoria: "Perfumes Hombre",
        precio: 149990,
        imagen: "img/gioarmani.jpg",
        descripcion: "Acqua Di Gio es una fragancia fresca y elegante para hombre."
    },
    {
        id: 2,
        nombre: "Perfume Rabanne Invictus Hombre EDT 50 ml",
        marca: "Rabanne",
        categoria: "Perfumes Hombre",
        precio: 79990,
        imagen: "img/invictus.jpg",
        descripcion: "Invictus es una fragancia masculina fresca, intensa y deportiva."
    },
    {
        id: 3,
        nombre: "Perfume La Bomba Eau de Parfum 80 ml",
        marca: "La Bomba",
        categoria: "Perfumes Mujer",
        precio: 129990,
        imagen: "img/bomba.jpg",
        descripcion: "Una fragancia intensa y sofisticada, ideal para mujeres que buscan destacar."
    },
    {
        id: 4,
        nombre: "Perfume 212 Heroes For Her EDP 80 ml",
        marca: "Carolina Herrera",
        categoria: "Perfumes Mujer",
        precio: 129990,
        imagen: "img/212.jpg",
        descripcion: "Una fragancia moderna, juvenil y femenina de Carolina Herrera."
    },
    {
        id: 5,
        nombre: "Perfume 1 Million EDT Hombre 200 ml",
        marca: "Rabanne",
        categoria: "Perfumes Hombre",
        precio: 119990,
        imagen: "img/onemillon.jpg",
        descripcion: "Una fragancia masculina intensa, elegante y reconocible."
    },
    {
        id: 6,
        nombre: "Perfume Ralph Lauren Big Pony Pink 2 EDT Mujer 100 ml",
        marca: "Ralph Lauren",
        categoria: "Perfumes Mujer",
        precio: 35990,
        imagen: "img/laurenmujer.jpg",
        descripcion: "Una fragancia femenina fresca y juvenil de Ralph Lauren."
    },
    {
        id: 7,
        nombre: "Perfume Eros EDT Hombre 200 ml",
        marca: "Versace",
        categoria: "Perfumes Hombre",
        precio: 99990,
        imagen: "img/eros.jpg",
        descripcion: "Versace Eros es una fragancia masculina intensa, fresca y seductora."
    },
    {
        id: 8,
        nombre: "Perfume CK One EDT Unisex 50 ml",
        marca: "Calvin Klein",
        categoria: "Perfumes Unisex",
        precio: 29990,
        imagen: "img/calvinunisex.jpg",
        descripcion: "CK One es una fragancia fresca y versátil diseñada para hombres y mujeres."
    },
    {
        id: 9,
        nombre: "Perfume Carolina Herrera 212 Vip Black Hombre EDP 50 ml",
        marca: "Carolina Herrera",
        categoria: "Perfumes Hombre",
        precio: 49990,
        imagen: "img/212black.jpg",
        descripcion: "Una fragancia masculina intensa y elegante, ideal para ocasiones especiales."
    },
    {
        id: 10,
        nombre: "Perfume Carolina Herrera 212 Men Heroes Hombre EDP 50 ml",
        marca: "Carolina Herrera",
        categoria: "Perfumes Hombre",
        precio: 89990,
        imagen: "img/212hombre.jpg",
        descripcion: "Una fragancia masculina moderna, fresca y juvenil."
    },
    {
        id: 11,
        nombre: "Perfume Carolina Herrera Bad Boy Hombre EDT 100 ml",
        marca: "Carolina Herrera",
        categoria: "Perfumes Hombre",
        precio: 109990,
        imagen: "img/badboy.jpg",
        descripcion: "Bad Boy es una fragancia masculina intensa, elegante y atrevida."
    },
    {
        id: 12,
        nombre: "Perfume Hugo Boss XX Mujer EDT 100ml",
        marca: "Hugo Boss",
        categoria: "Perfumes Mujer",
        precio: 32990,
        imagen: "img/Hugomujer.jpg",
        descripcion: "Una fragancia femenina elegante y moderna de Hugo Boss."
    },
    {
        id: 13,
        nombre: "Perfume Hombre Polo 67 EDT 40 ml Ralph Lauren",
        marca: "Ralph Lauren",
        categoria: "Perfumes Hombre",
        precio: 34990,
        imagen: "img/polohombre.jpg",
        descripcion: "Una fragancia masculina fresca y elegante de Ralph Lauren."
    },
    {
        id: 14,
        nombre: "Perfume Polo Red EDT Hombre 40 ml Ralph Lauren",
        marca: "Ralph Lauren",
        categoria: "Perfumes Hombre",
        precio: 29990,
        imagen: "img/polored.jpg",
        descripcion: "Polo Red es una fragancia masculina energética y moderna."
    },
    {
        id: 15,
        nombre: "Perfume Scandal EDP Mujer 80 ml",
        marca: "Jean Paul Gaultier",
        categoria: "Perfumes Mujer",
        precio: 89990,
        imagen: "img/scandal.jpg",
        descripcion: "Scandal es una fragancia femenina intensa, elegante y sofisticada."
    },
    {
        id: 16,
        nombre: "Perfume DKNY Be Delicious Mujer EDP 100 ML",
        marca: "DKNY",
        categoria: "Perfumes Mujer",
        precio: 79990,
        imagen: "img/dkny.jpg",
        descripcion: "Una fragancia femenina fresca, frutal y moderna."
    },
    {
        id: 17,
        nombre: "Perfume Thank U Next EDP 100 ML",
        marca: "Ariana Grande",
        categoria: "Perfumes Mujer",
        precio: 59990,
        imagen: "img/arianagrande.jpg",
        descripcion: "Una fragancia dulce, juvenil y femenina de Ariana Grande."
    },
    {
        id: 18,
        nombre: "Perfume Mujer Ariana Grande Cloud Pink EDP 100 ML",
        marca: "Ariana Grande",
        categoria: "Perfumes Mujer",
        precio: 59990,
        imagen: "img/cloudpink.jpg",
        descripcion: "Cloud Pink es una fragancia femenina dulce, suave y envolvente."
    },
    {
        id: 19,
        nombre: "Perfume Fresh Couture Pink EDT Mujer 100 ml Moschino",
        marca: "Moschino",
        categoria: "Perfumes Mujer",
        precio: 39990,
        imagen: "img/mochinopink.jpg",
        descripcion: "Una fragancia femenina fresca, divertida y moderna de Moschino."
    },
    {
        id: 20,
        nombre: "Perfume Lacoste Rose Sparkling EDT 100 ml Mujer",
        marca: "Lacoste",
        categoria: "Perfumes Mujer",
        precio: 68990,
        imagen: "img/lacostemujer.jpg",
        descripcion: "Una fragancia femenina fresca, delicada y elegante de Lacoste."
    },
    {
        id: 21,
        nombre: "Perfume Acqua Di Giorgio Hombre 100ml Giorgio Armani",
        marca: "Giorgio Armani",
        categoria: "Perfumes Hombre",
        precio: 149990,
        imagen: "img/gioarmani.jpg",
        descripcion: "Una fragancia masculina fresca, elegante y sofisticada."
    }
];

// ==========================================
// 2. FUNCIONES DE GESTIÓN DE LOCALSTORAGE
// ==========================================
function obtenerProductos() {
    const prodsGuardados = localStorage.getItem('productosAURA');
    if (!prodsGuardados) {
        localStorage.setItem('productosAURA', JSON.stringify(productosBase));
        return productosBase;
    }
    return JSON.parse(prodsGuardados);
}

function guardarProductosEnStorage(lista) {
    localStorage.setItem('productosAURA', JSON.stringify(lista));
}

// ==========================================
// 3. VISTA TIENDA (productos.html)
// ==========================================
const contenedor = document.getElementById("productos-container");

if (contenedor) {
    const listaProductos = obtenerProductos();
    
    listaProductos.forEach(producto => {
        const elemento = document.createElement("div");
        elemento.classList.add("producto");

        elemento.innerHTML = `
            <a href="producto.html?id=${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio.toLocaleString("es-CL")}</p>
            </a>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
                Añadir al carrito
            </button>
        `;
        contenedor.appendChild(elemento);
    });
}

function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carritoAURA')) || [];
    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    localStorage.setItem('carritoAURA', JSON.stringify(carrito));
    alert(`¡${nombre} se agregó al carrito!`);
}

// ==========================================
// 4. VISTA PANEL DE ADMIN (admin_productos.html)
// ==========================================
let editandoId = null;

document.addEventListener('DOMContentLoaded', () => {
    const tablaAdmin = document.querySelector('table');
    if (tablaAdmin) {
        renderizarTablaAdmin();
        configurarFormularioAdmin();
    }
});

function renderizarTablaAdmin() {
    const listaProductos = obtenerProductos();
    const tabla = document.querySelector('table');
    if (!tabla) return;

    // Eliminar filas de datos previas (mantiene encabezado)
    const filasExistentes = tabla.querySelectorAll('tr:not(:first-child)');
    filasExistentes.forEach(fila => fila.remove());

    listaProductos.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding: 12px; border-bottom: 1px solid #eee;">${p.id}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;"><strong>${p.nombre}</strong></td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">${p.marca}</td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;"><strong>$${Number(p.precio).toLocaleString('es-CL')}</strong></td>
            <td style="padding: 12px; border-bottom: 1px solid #eee;">
                <button onclick="prepararEditar(${p.id})" style="background-color: #d4af37; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; margin-right: 5px;">✏️ Editar</button>
                <button onclick="eliminarProducto(${p.id})" style="background-color: #dc3545; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">🗑️ Eliminar</button>
            </td>
        `;
        tabla.appendChild(tr);
    });
}

function configurarFormularioAdmin() {
    const inputs = document.querySelectorAll('main input');
    const btnGuardar = document.querySelector('main button');

    if (!btnGuardar || inputs.length < 4) return;

    btnGuardar.addEventListener('click', (e) => {
        e.preventDefault();

        const nombre = inputs[0].value.trim();
        const marca = inputs[1].value.trim();
        const precio = parseFloat(inputs[2].value);
        const imagen = inputs[3].value.trim();

        if (!nombre || !marca || isNaN(precio)) {
            alert('Por favor completa Nombre, Marca y Precio correctamente.');
            return;
        }

        let lista = obtenerProductos();

        if (editandoId !== null) {
            lista = lista.map(p => p.id === editandoId ? { ...p, nombre, marca, precio, imagen: imagen || p.imagen } : p);
            editandoId = null;
            btnGuardar.textContent = 'Guardar Producto';
            alert('¡Producto actualizado exitosamente!');
        } else {
            const nuevoId = lista.length > 0 ? Math.max(...lista.map(p => p.id)) + 1 : 1;
            const nuevoProducto = {
                id: nuevoId,
                nombre,
                marca,
                categoria: "Perfumes",
                precio,
                imagen: imagen || "img/gioarmani.jpg",
                descripcion: "Descripción predeterminada del producto."
            };
            lista.push(nuevoProducto);
            alert('¡Producto añadido con éxito!');
        }

        guardarProductosEnStorage(lista);
        limpiarInputs(inputs);
        renderizarTablaAdmin();
    });
}

window.prepararEditar = function(id) {
    const lista = obtenerProductos();
    const prod = lista.find(p => p.id === id);
    if (!prod) return;

    const inputs = document.querySelectorAll('main input');
    const btnGuardar = document.querySelector('main button');

    inputs[0].value = prod.nombre;
    inputs[1].value = prod.marca;
    inputs[2].value = prod.precio;
    inputs[3].value = prod.imagen;

    editandoId = id;
    if (btnGuardar) btnGuardar.textContent = 'Actualizar Producto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.eliminarProducto = function(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        let lista = obtenerProductos();
        lista = lista.filter(p => p.id !== id);
        guardarProductosEnStorage(lista);
        renderizarTablaAdmin();
    }
};

function limpiarInputs(inputs) {
    inputs.forEach(input => input.value = '');
}