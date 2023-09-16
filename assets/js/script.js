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



// --------------------------APARTADO DE AJAX-------------------------------
$(document).ready(function() {
    // obteniendo paginas
    var paginaActual = window.location.pathname.split('/').pop().split('.').shift();

    // definiendo paginas
    var archivosJSON = {
        'Ngeneral': 'generales.json',
        'Neconomia': 'economia.json',
        'Ndeporte': 'deportes.json'
    };

    // verificacion
    if (archivosJSON.hasOwnProperty(paginaActual)) {
        var archivoJSON = archivosJSON[paginaActual];

        // Realiza una petición AJAX para cargar el contenido del archivo JSON
        $.ajax({
            url: 'assets/noticias/' + archivoJSON,
            dataType: 'json',
            success: function(data) {
                var noticias = data.noticias;
                var tablaNoticias = $('#' + paginaActual + '-container').find('tbody');

                noticias.forEach(function(noticia) {
                    var titulo = noticia.titulo;
                    var contenido = noticia.contenido;
                    var visitas = noticia.visitas;
                    var imagen = noticia.imagen;

                    var filaNoticia = '<tr>';
                    filaNoticia += '<td><h3>' + titulo + '</h3></td>';
                    filaNoticia += '</tr>';
                    filaNoticia += '<tr>';
                    filaNoticia += '<td>' + contenido + '</td>';
                    filaNoticia += '</tr>';
                    filaNoticia += '<tr>';
                    filaNoticia += '<td><img src="' + imagen + '" alt="Imagen de la noticia" class="img-fluid"></td>';
                    filaNoticia += '</tr>';
                    filaNoticia += '<tr>';
                    filaNoticia += '<td><b>Visitas:</b> ' + visitas + '</td>';
                    filaNoticia += '</tr>';

                    tablaNoticias.append(filaNoticia);
                });
            },
            error: function() {
                console.log('Error al cargar las noticias.');
            }
        });
    } else {
        console.log('Página no encontrada en la lista de archivos JSON.');
    }
});




  
