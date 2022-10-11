var comprador = {
    nombre: "Cacho",
    comidafavorita: "ArrozConPollo",
    dinero: 1000
}

var Objeto1 = {
    Marca: "Motorola",
    FechaSalida: 2016,
    Funcionamiento: true,
}

var Precio = 500;

var Impuesto = 150;

var PrecioFinal = Precio + Impuesto;

var NombreObjeto = "celular";

var LocalesDisponibles = ["Shopping_SanJusto", "Abasto_Shopping", "TiendaDeCelularesRaulito"];

console.log("En un local de " + LocalesDisponibles[1]);

console.log("Llega un nuevo comprador:");

console.log(comprador);

console.log("Dice querer comprar un " + NombreObjeto);

console.log("A este se le ofrece lo siguiente:");

console.log(Objeto1);

console.log("El comprador lo obtiene a un precio de " + Precio + " con un valor agregado de " + Impuesto);

console.log("Lo que serían: " + PrecioFinal);

console.log("Cacho se va contento con su nuevo " + NombreObjeto + " y " + (1000 - PrecioFinal) + " en su bolsillo.");