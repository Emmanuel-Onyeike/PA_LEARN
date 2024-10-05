
const menuIcon = document.getElementById('menuIcon');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
function openModal() {
    modal.style.display = 'block'; 
    modal.style.transform = 'translateX(0)'; 
}


function closeModalFunc() {
    modal.style.transform = 'translateX(100%)'; 
    setTimeout(() => {
        modal.style.display = 'none'; 
    }, 300); 
}


menuIcon.addEventListener('click', openModal); 
closeModal.addEventListener('click', closeModalFunc); 


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunc();
    }
});
