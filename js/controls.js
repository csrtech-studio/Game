// js/controls.js

document.querySelectorAll('#controls button').forEach(button => {
    button.addEventListener('touchstart', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del toque
        simulateKeyPress(button.id);
    });

    button.addEventListener('mousedown', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del clic
        simulateKeyPress(button.id);
    });
});

function simulateKeyPress(buttonId) {
    const keyMapping = {
        'up': 'ArrowUp',
        'down': 'ArrowDown',
        'left': 'ArrowLeft',
        'right': 'ArrowRight',
        'enter': 'Enter'
    };
    
    const key = keyMapping[buttonId];
    if (key) {
        const event = new KeyboardEvent('keydown', { key: key, keyCode: keyToKeyCode(key), which: keyToKeyCode(key), bubbles: true });
        document.dispatchEvent(event);
    }
}

function keyToKeyCode(key) {
    const keyCodes = {
        'ArrowUp': 38,
        'ArrowDown': 40,
        'ArrowLeft': 37,
        'ArrowRight': 39,
        'Enter': 13
    };
    return keyCodes[key];
}
