const sections = document.querySelectorAll('section');
const bubble =  document.querySelector('.bubble');
const gradients = [
    'linear-gradient(to right top, #0082c8, #0082c8)',
    'linear-gradient(to right top, #ffe259, #ffa751)',
    'linear-gradient(to right top, #ED213A, #93291E)'
];

const options = {
    threshold: 0.7 
}


const navCheck = (entries) => {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`)
            bubble.style.setProperty('top', `${directions.top}px`)
            bubble.style.setProperty('width', `${directions.width}px`)
            bubble.style.setProperty('height', `${directions.height}px`)
            bubble.style.background = gradients[gradientIndex]
        }
    })
}

let observer = new IntersectionObserver(navCheck, options )

sections.forEach(section => {
    observer.observe(section);
});