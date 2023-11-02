//menu hamburguesa
const d = document;

const menuButton = d.querySelector('nav .btn');
const menuList = d.querySelector('nav .menu');

menuButton.onclick = () => menuList.classList.toggle('active');


// venta de tickets
//datos
const valorTickets = 200;
const categoria = document.getElementById("categoria");
const cantidadTickets = document.getElementById("cantidadTickets");
let descuento = 0;

//elegir categoria
categoria.addEventListener("change", function() {
    switch (categoria.value) {
        case 'estudiante':
            descuento = 0.8;
            break;
        case 'trainee':
            descuento = 0.5;
            break;
        case 'junior':
            descuento = 0.15;
            break;
        default:
            descuento = 0;
    }
});

//Ingresar cantidad, verificar numero valido y calcular importe a pagar 
function comprarTickets() {
    const cantidad = parseInt(document.getElementById("cantidadTickets").value.trim() || 0);

    if (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
        alert("Por favor, ingresa una cantidad válida de tickets.");
        return "Total a pagar: $0.00";
    }

    let totalApagar = valorTickets * cantidad * (1 - descuento);
    return `Total a pagar: $${totalApagar.toFixed(2)}`;
}

//borrar los datos
function borrarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("cantidadTickets").value = "";
    document.getElementById("totalPagar").innerText = "Total a pagar: $";
    document.getElementById("categoria").value = "estudiante";
}

//mostrar resumen de importe a pagar
function mostrarResumen() {
    const resumen = comprarTickets();
    document.getElementById("totalPagar").innerText = resumen;
}