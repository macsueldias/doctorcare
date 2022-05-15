window.addEventListener('scroll', onScroll);
onScroll();
function onScroll () {
    showNavOnScroll();
    showBackToTopButtomOnScroll();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function showNavOnScroll () {
    if(scrollY > 0) {
        navigation.classList.add('scroll');
    }else {
        navigation.classList.remove('scroll');
    }  
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    // verificar se a seção passou da linha
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;
    
    // verificar se a base está abaixo da linha alvo
    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

    // limites da seção
    const sectionBoundaries =   
        sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove('active');
    if (sectionBoundaries) {
        menuElement.classList.add('active');
    }
}

function showBackToTopButtomOnScroll () {
    if(scrollY > 500) {
        toTopButton.classList.add('show');
    }else {
        toTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about header,
#about .content
`);