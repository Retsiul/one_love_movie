const heroSection = document.querySelector('.hero');
const heightHero = heroSection.clientHeight;

window.addEventListener('scroll', function () {
    const position = window.scrollY;
    if (position <= heightHero) {
        invisibityHeader()

    }
    else {
        visibityHeader()

    }
})

function visibityHeader() {
    const header = document.querySelectorAll('.button');
    header.forEach(el => {
        el.classList.add('button--is-hidden');
    })


}


function invisibityHeader() {
    const header = document.querySelectorAll('.button');
    header.forEach(el => {
        el.classList.remove('button--is-hidden');
    })

}