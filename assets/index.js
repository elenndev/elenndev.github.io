let initialPosition = null
window.addEventListener('load', ()=> {
    const draggableWindow = document.querySelector('.myWindow')
    initialPosition = draggableWindow.getBoundingClientRect()
})

function makeDraggable (element) {
    let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;

    console.log(initialPosition)

    element.querySelector('.window-top').onmousedown = dragMouseDown;
    
    function resetDragElement(){
        element.style.position = 'sticky'
        currentPosX = 0; currentPosY = 0; previousPosX = 0;previousPosY = 0;

            element.style.top = `${initialPosition.top}px`;
            element.style.bottom = `${initialPosition.bottom}px`;
            element.style.left = `${initialPosition.left}px`;
            element.style.right = `${initialPosition.right}px`;
    }

    window.addEventListener("scroll", ()=>{
        resetDragElement()
        stopDragElement()
    })


    function dragMouseDown(e) {
        console.log('down')
        e.preventDefault();
        previousPosX = e.clientX;
        previousPosY = e.clientY;

        document.onmouseup = stopDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        currentPosX = previousPosX - e.clientX;
        currentPosY = previousPosY - e.clientY;

        previousPosX = e.clientX;
        previousPosY = e.clientY;

        const rightLimit = window.innerWidth - e.clientX
        const bottomLimit = window.innerHeight - e.clientY

        if (e.clientX == 0 || rightLimit == 0 || e.clientY == 0 || bottomLimit == 50){
            console.log('borda')
            
            resetDragElement()
            stopDragElement()
        }

        element.style.position = 'fixed'
        element.style.top = (element.offsetTop - currentPosY) + 'px';
        element.style.left = (element.offsetLeft - currentPosX) + 'px';

    }

    function stopDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }


}
makeDraggable(document.querySelector('.myWindow'));

window.addEventListener("scroll", ()=>{
    const element = document.querySelector('#myWindow')
    element.style.position = 'sticky'
})

//Close the window on click of a red button
document.addEventListener('click', e => {
    if (e.target.closest('.round.red')) {
        e.target.closest('.window').remove();
    }
});

function closeProject(element){
    const bigWindow = element.parentElement.parentElement
    bigWindow.style.display = 'none';
}

function openProject(projectName){
    const projectWindow = document.querySelector(`.project-bigWindow.${projectName}`)
    projectWindow.style.display = 'flex'
}

function projectViews(element){
    const galery = element.parentElement
    const allImages = galery.querySelectorAll('li')
    const currentVisibleImage = galery.querySelector('.visible')
    const numberCurrentVisibleImage = Number(currentVisibleImage.classList[0].slice(-1))
    let newVisibleImage = null
    
    if(element.getAttribute('name') == 'nextImage'){
        const nextImageNumber = numberCurrentVisibleImage + 1
        console.log(allImages.length, nextImageNumber)

        if(nextImageNumber <= allImages.length){
            console.log('vai toma no cu')
            newVisibleImage = galery.querySelector(`.img${String(nextImageNumber)}`)
        } else {
            newVisibleImage = galery.querySelector(`.img1`)
        }
        currentVisibleImage.classList.remove('visible')
        newVisibleImage.classList.add('visible')

    } else{
        const prevImageNumber = currentVisibleImage.classList[0].slice(-1) - 1
        let newVisibleImage = null

        if(prevImageNumber < 1 ){
            newVisibleImage = galery.querySelector(`.img${String(allImages.length)}`)
        } else if (prevImageNumber >= 1){
            newVisibleImage = galery.querySelector(`.img${String(numberCurrentVisibleImage - 1)}`)
        }
        currentVisibleImage.classList.remove('visible')
        newVisibleImage.classList.add('visible')
    }

}

