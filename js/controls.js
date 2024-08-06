// js/controls.js

document.getElementById('up').addEventListener('click', () => {
    simulateKeyPress('ArrowUp');
});

document.getElementById('down').addEventListener('click', () => {
    simulateKeyPress('ArrowDown');
});

document.getElementById('left').addEventListener('click', () => {
    simulateKeyPress('ArrowLeft');
});

document.getElementById('right').addEventListener('click', () => {
    simulateKeyPress('ArrowRight');
});

document.getElementById('enter').addEventListener('click', () => {
    simulateKeyPress('Enter');
});

function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', { key: key, keyCode: keyToKeyCode(key), which: keyToKeyCode(key), bubbles: true });
    document.dispatchEvent(event);
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
