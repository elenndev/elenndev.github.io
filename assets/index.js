let initialPosition = null
const projectsSmallCards = document.querySelectorAll('.project-smallWindow')
const navbar = document.querySelector('.navbar.items')


// style
//margin top do primeiro section
const headerHeight = Number(window.getComputedStyle(document.querySelector('header')).height.slice(0, -2))
const introductionSection = document.querySelector('#introduction')
introductionSection.style.marginTop = `${headerHeight * 2}px`

// scroll navbar
const links = navbar.querySelectorAll('a.toSection')

function goToSection(element) {

    const id_linkTarget = element.getAttribute('href')

    const linkTarget = document.querySelector(id_linkTarget)
    const controlNavbar = document.querySelector('.control_navbar')

    if (linkTarget) {
        linkTarget.scrollTo({
            behavior: "smooth",
            block: 'center'
        })

    }

    if (navbar.classList.contains('visible') || window.getComputedStyle(controlNavbar).dsplay != 'none') {
        navbar.classList.remove('visible')
        controlNavbar.classList.remove('toHideNav')
        controlNavbar.classList.add('toShowNav')
    }

}
// links.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault()

//     })
// })




window.addEventListener('load', () => {
    const draggableWindow = document.querySelector('.myWindow')
    initialPosition = draggableWindow.getBoundingClientRect()


})

function makeDraggable(element) {
    let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;


    element.querySelector('.window-top').onmousedown = dragMouseDown;

    function resetDragElement() {
        element.style.position = 'sticky'
        currentPosX = 0; currentPosY = 0; previousPosX = 0; previousPosY = 0;

        element.style.top = `${initialPosition.top}px`;
        element.style.bottom = `${initialPosition.bottom}px`;
        element.style.left = `${initialPosition.left}px`;
        element.style.right = `${initialPosition.right}px`;
    }

    window.addEventListener("scroll", () => {
        resetDragElement()
        stopDragElement()
    })


    function dragMouseDown(e) {
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

        if (e.clientX == 0 || rightLimit == 0 || e.clientY == 0 || bottomLimit == 50) {

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
// makeDraggable(document.querySelector('.myWindow'));

// window.addEventListener("scroll", ()=>{
//     const element = document.querySelector('#myWindow')
//     element.style.position = 'sticky'
// })

function controlNavbar(element) {
    if (navbar.classList.contains('visible')) {
        element.classList.add('toShowNav')
        element.classList.remove('toHideNav')
        navbar.style.display = 'none'
        navbar.classList.remove('visible')
    } else {
        element.classList.add('toHideNav')
        element.classList.remove('toShowNav')
        navbar.classList.add('visible')
        navbar.style.display = 'flex'
    }



}
function closeProject(element) {
    const bigWindow = element.parentElement.parentElement
    bigWindow.style.display = 'none';

    projectsSmallCards.forEach(card => {
        card.style.display = 'flex'
    })
}

function openProject(projectName) {
    const projectWindow = document.querySelector(`.project-bigWindow.${projectName}`)

    projectsSmallCards.forEach(card => {
        card.style.display = 'none'
    })

    projectWindow.style.display = 'flex'
}

function projectViews(element) {
    const galery = element.parentElement
    const allImages = galery.querySelectorAll('li')
    const currentVisibleImage = galery.querySelector('.visible')
    const numberCurrentVisibleImage = Number(currentVisibleImage.classList[0].slice(-1))
    let newVisibleImage = null

    if (element.getAttribute('name') == 'nextImage') {
        const nextImageNumber = numberCurrentVisibleImage + 1

        if (nextImageNumber <= allImages.length) {
            newVisibleImage = galery.querySelector(`.img${String(nextImageNumber)}`)
        } else {
            newVisibleImage = galery.querySelector(`.img1`)
        }
        currentVisibleImage.classList.remove('visible')
        newVisibleImage.classList.add('visible')

    } else {
        const prevImageNumber = currentVisibleImage.classList[0].slice(-1) - 1
        let newVisibleImage = null

        if (prevImageNumber < 1) {
            newVisibleImage = galery.querySelector(`.img${String(allImages.length)}`)
        } else if (prevImageNumber >= 1) {
            newVisibleImage = galery.querySelector(`.img${String(numberCurrentVisibleImage - 1)}`)
        }
        currentVisibleImage.classList.remove('visible')
        newVisibleImage.classList.add('visible')
    }

}

