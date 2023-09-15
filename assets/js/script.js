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

// --------------------------APARTADO DE AJAX-------------------------------
$(document).ready(function() {
    // Realiza una petición AJAX para cargar el contenido del archivo JSON
    $.ajax({
        url: 'assets/noticias/generales.json',// Reemplaza con la ruta correcta
      dataType: 'json',
      success: function(data) {
        // Accede a los datos del JSON
        var titulo = data.titulo;
        var contenido = data.contenido;
        var visitas = data.visitas;
        var imagen = data.imagen;
  
        // Muestra el título, contenido y número de visitas en tu página
        $('#noticia-container').append('<h3>' + titulo + '</h3>');
        $('#noticia-container').append('<p>' + contenido + '</p>');
        $('#visitas-container').text('Visitas: ' + visitas);
  
        // Carga la imagen en tu página
        $('#imagen-container').append('<img src="' + imagen + '" alt="Imagen de la noticia">');
      },
      error: function() {
        // Maneja errores de la petición AJAX si es necesario
        console.log('Error al cargar la noticia.');
      }
    });
  });
