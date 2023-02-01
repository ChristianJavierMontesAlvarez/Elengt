//AGREGAR PRODUCTOS POR METODO DOM EN INDEX(LO MAS NUEVO):

let contenedor_lomasnuevo = document.getElementById("contenedor_lomasnuevo");

for (let articulo of productos_hombre) {
    if (articulo.nuevo == true) {
        let producto = document.createElement("article");
        producto.className = `card col-5 col-md-2 m-2 m-md-0`
        producto.innerHTML = `<img src="/img/${articulo.img1}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${articulo.precio}</h5>
          <p class="card-text fs-5">${articulo.nombre}</p>
          <button class="btn btn-dark">Comprar</button>
        </div>`;
        contenedor_lomasnuevo.append(producto);
    }
}

for (let articulo of productos_mujer) {
    if (articulo.nuevo == true) {
        let producto = document.createElement("article");
        producto.className = `card col-5 col-md-2 m-2 m-md-0`
        producto.innerHTML = `<img src="/img/${articulo.img1}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${articulo.precio}</h5>
          <p class="card-text fs-5">${articulo.nombre}</p>
          <button class="btn btn-dark">Comprar</button>
        </div>`;
        contenedor_lomasnuevo.append(producto);
    }
}

//AGREGAR PRODUCTOS POR METODO DOM EN INDEX(OFERTAS):

//HOMBRES:

let contenedor_ofertas = document.getElementById("contenedor_ofertas");

for (let articulo of productos_hombre) {

    if (articulo.ofertas == true) {
        let producto = document.createElement("article");
        producto.id = `${articulo.id}`
        producto.className = `col-10 col-md-5 my-4 p-0 articulos_ofertas`;
        producto.innerHTML = `<img src="/img/${articulo.img1}" width="100%" alt="">
        <h5 class="card-title">${articulo.precio} ARS</h5>
        <p class="card-text">${articulo.nombre}</p>  
        <a href="" class="btn btn-dark">Ir a Comprar</a>`;
        contenedor_ofertas.append(producto);
    }
}

//MUJERES:

for (let articulo of productos_mujer) {

    if (articulo.ofertas == true) {
        let producto = document.createElement("article")
        producto.id = `${articulo.id}`
        producto.className = `col-10 col-md-5 my-4 p-0 articulos_ofertas ${articulo.id}`;
        producto.innerHTML = `<img src="/img/${articulo.img1}"  width="100%" alt="">
        <h5 class="card-title">${articulo.precio} ARS</h5>
        <p class="card-text">${articulo.nombre}</p>  
        <a href="" class="btn btn-dark">Ir a Comprar</a>`;

        contenedor_ofertas.append(producto);
    }
}


//ANIMACIONES DE HOVER EN IMG POR JS:

let articulos_ofertas = document.getElementsByClassName("articulos_ofertas");

for (let articulo of articulos_ofertas) {
    articulo.addEventListener("mouseover", cambiar_imagen);
    articulo.addEventListener("mouseout", regresar_imagen);

    function cambiar_imagen() {
        for (let prod of productos_hombre) {
            if (articulo.id == prod.id) {
                articulo.querySelector(`img`).src = `img/${prod.img2}`;
            }
        }

        for (let prod of productos_mujer) {
            if (articulo.id == prod.id) {
                articulo.querySelector(`img`).src = `img/${prod.img2}`;
            }
        }
    }

    function regresar_imagen () {
        for (let prod of productos_hombre) {
            if (articulo.id == prod.id) {
                articulo.querySelector(`img`).src = `img/${prod.img1}`;
            }
        }

        for (let prod of productos_mujer) {
            if (articulo.id == prod.id) {
                articulo.querySelector(`img`).src = `img/${prod.img1}`;
            }
        }
    }
}