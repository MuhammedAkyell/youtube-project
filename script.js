document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.animate-text');
    const text = title.textContent;
    title.textContent = '';
    
    let index = 0;
    const typeEffect = setInterval(() => {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeEffect);
            startColorAnimation();
        }
    }, 150);
});

function startColorAnimation() {
    const title = document.querySelector('.animate-text');
    let hue = 0;

    setInterval(() => {
        hue = (hue + 1) % 360;
        title.style.color = `hsl(${hue}, 70%, 70%)`;
    }, 50);
} 