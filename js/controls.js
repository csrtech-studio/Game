// controls.js

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
    const event = new KeyboardEvent('keydown', { key: key });
    document.dispatchEvent(event);
}
