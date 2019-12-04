const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalWindow = document.getElementById('modal-form');

openModalBtn.onclick = () =>  modalWindow.style.display = "block";

closeModalBtn.onclick = () => modalWindow.style.display = "none";