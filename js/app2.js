//variable generales

var activeMenu = 0;
var lista = "";
var inpar = "";
var booleanaBloque = false;


//funciones de apertura y cierre de menu movil inicio
var botonMenu = document.querySelector("#showMenu");
var menuMovil = document.querySelector("#MovilMenu");

botonMenu.addEventListener("click", menuAction);

function menuAction() {
    if (activeMenu == 0) {
        menuMovil.style.right = 0
        activeMenu = 1;
    }
}

function closeMenu() {
    if (activeMenu == 1) {

        menuMovil.style.right = "100%"
        activeMenu = 0;

    }

}

//funciones de apertura y cierre de menu movil fin


//funciones de insercion de productos dentro de un ID iNICIO
var products = [
    {
        title: 'Botín',
        price: 800.44,
        category: 'Botines',
        image: 'http://placehold.it/225x225',
        brand: 'nike'
    },
    {
        title: 'Ojotas',
        price: 300.99,
        category: 'Ojotas',
        image: 'http://placehold.it/225x225',
        brand: 'adidas'
    },
    {
        title: 'Zapatillas',
        price: 1120.00,
        category: 'Calzado',
        image: 'http://placehold.it/225x225',
        brand: 'puma'
    },
    {
        title: 'Short',
        price: 320.44,
        category: 'Vestimenta',
        image: 'http://placehold.it/225x225',
        brand: 'nike'
    },
    {
        title: 'Pantalón',
        price: 360.44,
        category: 'Natación',
        image: 'http://placehold.it/225x225',
        brand: 'nike'
    }
];

for (var i = 0; i < products.length; i++) {
    console.log("Tipo: " + products[i].title + ", Precio: " + products[i].price + ", Categoria: " + products[i].category + ", Foto: " + products[i].image + ", Marca: " + products[i].brand);

    if (i % 2 == 0) {
        inpar = "oferta";
    } else {
        inpar = "";
    }

    lista = lista +
        ' <div class="colum colum-3 colum-tablet-movil">' +
        '<div class="productos">' +
        '<div class="img-productos imagen">' +
        '<img class="img" src="' + products[i].image + '" alt="">' +
        '</div>' +
        '<div class="texto-media">' +

        ' <p class="' + inpar + ' off"></p>' +
        ' <p class="big">' + products[i].title + '</p>' +
        '<p class="verde">$ ' + products[i].price + ' <span class="' + products[i].brand + '"></span></p>' +
        ' <p class="category">' + products[i].category + '</p>' +
        '</div>' +

        '</div>' +
        '</div>';


};

var listado = document.getElementById("row")
listado.innerHTML = lista;

//funciones de insercion de productos dentro de un ID Fin







    