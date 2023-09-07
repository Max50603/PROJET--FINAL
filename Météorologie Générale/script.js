document.getElementById("retourenhaut").addEventListener("click", function ()){
    smoothScrollBy(10, 100);
}
function smoothScrollBy(distance, duration) {
    const initialY = window.scrollY;
    const targetY = initialY + distance;
    const startTime = performance.now();

    function scrollStep() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        window.scrollTo(0, easeInOut(initialY, targetY, elapsed, duration));

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    function easeInOut(start, end, elapsed, duration) {
        elapsed /= duration / 2;
        if (elapsed < 1) return start + (end - start) / 2 * elapsed * elapsed;
        elapsed--;
        return start - (end - start) / 2 * (elapsed * (elapsed - 2) - 1);
    }

    requestAnimationFrame(scrollStep);
}