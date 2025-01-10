gsap.registerPlugin(TextPlugin);

let initialPosition = null
let theme = null
const projectsSmallCards = document.querySelectorAll('.project-smallWindow')
const navbar = document.querySelector('.navbar.items')


// style
//margin top do primeiro section
const headerHeight = Number(window.getComputedStyle(document.querySelector('header')).height.slice(0, -2))
const introductionSection = document.querySelector('#introduction')
introductionSection.style.marginTop = `${headerHeight + 5}px`
const h1 = introductionSection.querySelector('h1')
const h1Content = h1.textContent
const p = introductionSection.querySelector('.text-hello>p')
const aboutMeSection = document.querySelector('#aboutMe')
const projectsSection = document.querySelector('#projects')

// animacoes
const smallWindow = introductionSection.querySelector(".smallWindow")
const helloTexts = introductionSection.querySelectorAll(".text-hello>.text")
function moveIn_smallWindow(){
    gsap.fromTo(smallWindow, {
        x: -50,
        opacity: 1},
        {x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"}
    );
}
function moveOut_smallWindow(){
    gsap.fromTo(smallWindow, {
        x: 0,
        opacity: 1},
        {x: -50,
        opacity: 0,
        duration: 1,
        ease: "sine.inOut"}
    );
}

function moveIn_helloTexts(){
    // remove o conteudo pra animar
    h1.textContent = ''
    gsap.fromTo(p, {
        x: 50,
        opacity: 1},
        {x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"}
    );

    gsap.to(h1, {
        duration: h1Content.length * 0.1,
        text: h1Content,
        ease: "none"
    })

}
function moveOut_helloTexts(){
    gsap.fromTo(p, {
        x: 0,
        opacity: 1},
        {x: 50,
        opacity: 0,
        duration: 1,
        ease: "sine.inOut"}
    );
    gsap.to(h1, {
        duration: h1Content.length * 0.50,
        text: " ",
        ease: "none"
    })
    
}

function moveIn_section(section, isLeft){
    const x_value = isLeft? 50 : -50
    const container = section.querySelector('.container')
    const delay = section.id == 'aboutMe'? 0.25 : 0
    gsap.fromTo(container, {
        x: x_value,
        opacity: 0},
        {x: 0,
        opacity: 1,
        delay: delay,
        duration: 0.5,
        ease: "power2.out"}
    );
}
function moveOut_section(section, isLeft){
    const x_value = isLeft? 50 : -50
    const container = section.querySelector('.container')
    gsap.fromTo(container, {
        x: 0,
        opacity: 1},
        {x: x_value,
        opacity: 0,
        duration: 0.50,
        ease: "power2.out"}
    );
}


function animation_moveIn(element){
    const id = element.id
    switch (id){
        case 'introduction':
            moveIn_smallWindow()
            moveIn_helloTexts()
            moveIn_section(element, true)
            break;
        case 'aboutMe':
            moveIn_section(element, false)
            break;
        case 'projects':
            moveIn_section(element, true)
            break;
    }
}
function animation_moveOut(element){
    const id = element.id
    switch (id){
        case 'introduction':
            moveOut_smallWindow()
            moveOut_helloTexts()
            moveOut_section(element, true)
            break;
        case 'aboutMe':
            moveOut_section(element, false)
            break;
        case 'projects':
            moveOut_section(element, true)
            break;
    }
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animation_moveIn(entry.target)
        } else {
            animation_moveOut(entry.target)
        }
    });
}, { threshold: 0.25 }); 
observer.observe(introductionSection);
observer.observe(aboutMeSection);
observer.observe(projectsSection);

// scroll navbar
const links = navbar.querySelectorAll('p.toSection')
links.forEach((link) => {
    link.addEventListener('click', () => {
        const id_linkTarget = link.classList[1]
        const linkTarget = document.querySelector(`#${id_linkTarget}`)

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

