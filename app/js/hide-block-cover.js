const blockBtns = document.querySelectorAll('[data-block-btn]')

function hideCover() {
    let element = this;
    let coverElement = element.parentElement.querySelector('[data-cover]');

    element.classList.toggle('active');
    coverElement.classList.toggle('hidden')
}

blockBtns.forEach( e => e.onclick = hideCover);