function mostrarFechaYHora() {
    const elementoFechaHora = document.getElementById("fecha-hora-banner");
    
    function actualizarFechaYHora() {
        const fechaHoraActual = new Date();
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Formato de 24 horas
        };
        const fechaHoraFormateada = fechaHoraActual.toLocaleDateString('es-ES', opciones);
        elementoFechaHora.textContent = fechaHoraFormateada;
    }
    
    // Actualizar la fecha y hora cada segundo
    setInterval(actualizarFechaYHora, 1000);
}

// Llama la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", mostrarFechaYHora);


function enviarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    
    // Restablecer el formulario después de mostrar el mensaje (opcional)
    document.getElementById("formulario-contacto").reset();
    
    // Mostrar el mensaje de envío con detalles usando un alert
    const mensajeConfirmacion = `Formulario enviado con éxito.\nDetalles:\nNombre: ${nombre}\nMensaje: ${mensaje}`;
    alert(mensajeConfirmacion);
    console.log(mensajeConfirmacion);
}


// Función para contar y actualizar el contador de artículos por sección
function actualizarContadorPorSeccion() {
    // Selecciona todas las secciones de noticias
    const seccionesNoticias = document.querySelectorAll('.Noticias, .Deportes, .Negocios');

    // Recorre todas las secciones de noticias
    seccionesNoticias.forEach(seccion => {
        const contadorArticulos = seccion.querySelector('.contador-articulos');
        const articulosEnSeccion = seccion.querySelectorAll('tbody tr'); // Ajusta el selector según tu estructura HTML

        // Actualiza el contador de la sección
        if (contadorArticulos && articulosEnSeccion) {
            contadorArticulos.textContent = articulosEnSeccion.length;
        }
    });
}

// Llama a la función al cargar la página para mostrar la cantidad inicial
window.addEventListener('load', actualizarContadorPorSeccion);


