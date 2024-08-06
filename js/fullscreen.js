// js/fullscreen.js

document.getElementById('fullscreen-button').addEventListener('click', function() {
    if (document.fullscreenElement) {
        // Si ya está en pantalla completa, salir de ella
        document.exitFullscreen();
    } else {
        // Entrar en pantalla completa
        document.documentElement.requestFullscreen().catch(err => {
            console.error("Error al intentar activar pantalla completa:", err);
        });
    }
});

// Ajustar el tamaño del contenedor del juego cuando se cambia a pantalla completa
document.addEventListener('fullscreenchange', function() {
    const gameContainer = document.getElementById('game-container');
    if (document.fullscreenElement) {
        gameContainer.style.height = '100vh'; // Ocupa toda la altura de la pantalla
    } else {
        gameContainer.style.height = 'calc(100vh - 150px)'; // Restablece el tamaño original
    }
});
