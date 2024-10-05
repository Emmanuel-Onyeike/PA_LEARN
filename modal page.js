document.getElementById('menu-icon').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.right = '0';
    }, 10); 
});

document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.right = '-300px'; 
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); 
});

