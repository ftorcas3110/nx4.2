let seed = [
    { id: 1, nombre: "Patata", stock: 20 },
    { id: 2, nombre: "Pimiento", stock: 21 },
    { id: 3, nombre: "Pepino", stock: 22 }
]

let productos = null;

export default function getProductos() {
    // if (productos)
    //     return productos;
    // if (!global._productos) {
    //     productos = seed;
    //     global._productos = productos;
    // } else {
    //     productos = global._productos;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!productos) 
        productos = seed;
    
    return productos;
}

