let initialPosition = null
let theme = null
const projectsSmallCards = document.querySelectorAll('.project-smallWindow')
const navbar = document.querySelector('.navbar.items')


// style
//margin top do primeiro section
const headerHeight = Number(window.getComputedStyle(document.querySelector('header')).height.slice(0, -2))
const introductionSection = document.querySelector('#introduction')
introductionSection.style.marginTop = `${headerHeight + 5}px`

// scroll navbar
const links = navbar.querySelectorAll('p.toSection')
links.forEach((link) => {
    link.addEventListener('click', () => {
        const id_linkTarget = link.classList[1]
        const linkTarget = document.querySelector(`#${id_linkTarget}`)
        console.log(linkTarget)

        linkTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })

        const controlNavbar = document.querySelector('.control_navbar')
        if (navbar.classList.contains('visible') || window.getComputedStyle(controlNavbar).dsplay != 'none') {
            navbar.classList.remove('visible')
            controlNavbar.classList.remove('toHideNav')
            controlNavbar.classList.add('toShowNav')
        }
    })
})


window.addEventListener('load', () => {
    const draggableWindow = document.querySelector('.myWindow')
    initialPosition = draggableWindow.getBoundingClientRect()


    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDarkMode) {
    theme = 'dark'
    document.querySelector('#theme-toggle').checked = true
} else {
    theme = 'light'
}
document.body.classList.add(`${theme}-theme`)

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

function changeTheme(){
    if (theme == 'dark'){
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
        theme = 'light'
    } else {
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
        theme = 'dark'
    }
}

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
    const projectWindow = element.parentElement.parentElement
    projectWindow.style.display = 'none';
    projectWindow.parentElement.style.removeProperty('min-height');


    projectsSmallCards.forEach(card => {
        card.style.display = 'flex'
    })
}

function openProject(projectName) {
    const projectWindow = document.querySelector(`.project-bigWindow.${projectName}`)
    projectWindow.parentElement.style.minHeight = '500px'

    projectsSmallCards.forEach(card => {
        card.style.display = 'none'
    })

    projectWindow.style.display = 'flex'
    projectWindow.scrollIntoView({
        block: 'center'
    })
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

