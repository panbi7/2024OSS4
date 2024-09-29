let isTextEnlarged = false;

export function toggleTextSize() {
    const helloWorldText = document.querySelector('.App-header p');
    if (helloWorldText) {
        if (isTextEnlarged) {
            helloWorldText.style.fontSize = 'calc(10px + 2vmin)';
        } else {
            helloWorldText.style.fontSize = 'calc(20px + 4vmin)';
        }
        isTextEnlarged = !isTextEnlarged;
    }
}
