const modelos = [
    {
      name: "Fiesta",
      value: "fordUno",
      marca: "ford",
      price: 6300,
    },
    {
      name: "Ka",
      value: "fordDos",
      marca: "ford",
      price: 3890,
    },
    {
      name: "Focus",
      value: "fordTres",
      marca: "ford",
      price: 4550,
    },
    {
      name: "Ranger",
      value: "fordCuatro",
      marca: "ford",
      price: 7330,
    },
    {
      name: "Cruze",
      value: "chevroletUno",
      marca: "chevrolet",
      price: 12300,
    },
    {
      name: "Sonic",
      value: "chevroletDos",
      marca: "chevrolet",
      price: 8400,
    },
    {
      name: "Aveo",
      value: "chevroletTres",
      marca: "chevrolet",
      price: 6700,
    },
    {
      name: "Spark",
      value: "chevroletCuatro",
      marca: "chevrolet",
      price: 15600,
    },
    {
      name: "Jetta",
      value: "volkswagenUno",
      marca: "volkswagen",
      price: 8900
    },
    {
      name: "Golf",
      value: "volkswagenDos",
      marca: "volkswagen",
      price: 20900,
    },
    {
      name: "Passat",
      value: "volkswagenTres",
      marca: "volkswagen",
      price: 14370,
    },
    {
      name: "Tiguan",
      value: "volkswagenCuatro",
      marca: "volkswagen",
      price: 6090,
    },
    {
      name: "Civic",
      value: "hondaUno",
      marca: "honda",
      price: 11400,
    },
    {
      name: "Accord",
      value: "hondaDos",
      marca: "honda",
      price: 21000,
    },
    {
      name: "CR-V",
      value: "hondaTres",
      marca: "honda",
      price: 13500,
    },
    {
      name: "Corolla",
      value: "toyotaUno",
      marca: "toyota",
      price: 7090,
    },
    {
      name: "Camry",
      value: "toyotaDos",
      marca: "toyota",
      price: 8500,
    },
    {
      name: "Rav4",
      value: "toyotaTres",
      marca: "toyota",
      price: 12780,
    }
  ];

const selectMarca = document.getElementById("marca");
const selectModelo = document.getElementById("modelo");

selectMarca.addEventListener("change", function() {

    selectModelo.innerHTML = "";

    const modelosFiltrados = modelos.filter(function (modelo) { 
        return modelo.marca === selectMarca.value
    })

    for (let i = 0; i < modelosFiltrados.length; i++) {
        const opt = document.createElement("option");
        opt.value = modelosFiltrados[i].value;
        opt.innerHTML = modelosFiltrados[i].name;
        selectModelo.appendChild(opt);
    }


    selectModelo.disabled = false; 
});


function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }

function cotizar() {

    const modeloSeleccionado = modelos.find(function (modelo) { 
        return modelo.value === selectModelo.value
    });
    if (modeloSeleccionado) {
        const autoCotizado = document.getElementById("price");
        autoCotizado.innerHTML = "El valor de la cuota del vehículo es de $" + modeloSeleccionado.price;
    }

    
    const price = document.getElementById("price");
    price.style.display = "block";

}

