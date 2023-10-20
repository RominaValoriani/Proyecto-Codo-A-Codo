//menu hamburguesa
const d = document;

const menuButton = d.querySelector('nav .btn');
const menuList = d.querySelector('nav .menu');

menuButton.onclick = () => menuList.classList.toggle('active');


//comprar tickets

// Datos de entrada
const precioEntrada = 200;

// Solicitar al usuario que ingrese la cantidad de entradas
const cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas:", 1));

// Validar que la cantidad de entradas sea un número positivo
if (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
    alert("Por favor, ingrese un número válido de entradas.");
} else {
    // Solicitar al usuario que ingrese la categoría
    const categoria = prompt("Ingrese la categoría (Estudiante, Trainee, Junior):").toLowerCase();

    // Función para calcular el descuento
    function calcularDescuento(categoria) {
        switch (categoria) {
            case 'estudiante':
                return 0.8; // 80% de descuento
            case 'trainee':
                return 0.5; // 50% de descuento
            case 'junior':
                return 0.15; // 15% de descuento
            default:
                return 0; // Sin descuento por defecto
        }
    }

    // Calcular el descuento y el precio total
    const descuento = calcularDescuento(categoria);
    const precioTotal = precioEntrada * cantidadEntradas * (1 - descuento);

    // Mostrar el resultado
    alert(`Precio total a pagar: $${precioTotal}`);
    //console.log(`Precio total a pagar: $${precioTotal}`);
}