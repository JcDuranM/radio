self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Notificación sin cuerpo',
        icon: 'icon.png', // Ruta al icono de la notificación
        badge: 'badge.png' // Ruta a la imagen de la insignia
    };

    event.waitUntil(
        self.registration.showNotification('Renta de Carritos Montables', options)
    );
});
