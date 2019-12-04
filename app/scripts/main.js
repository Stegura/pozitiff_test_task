const blockBtns = document.querySelectorAll('[data-block-btn]')

function hideCover() {
    let element = this;
    let coverElement = element.parentElement.querySelector('[data-cover]');

    element.classList.toggle('active');
    coverElement.classList.toggle('hidden')
}

blockBtns.forEach( e => e.onclick = hideCover);
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalWindow = document.getElementById('modal-form');

openModalBtn.onclick = () =>  modalWindow.style.display = "block";

closeModalBtn.onclick = () => modalWindow.style.display = "none";
//# sourceMappingURL=main.js.map
