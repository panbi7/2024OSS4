// changeBackgroundColor.js

let isYellowBackground = false;

export function changeBackgroundColor() {
    if (isYellowBackground) {
        document.body.style.backgroundColor = '#282c34';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
    isYellowBackground = !isYellowBackground;
}
