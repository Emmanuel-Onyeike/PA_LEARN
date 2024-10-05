document.getElementById('confirm-btn').addEventListener('click', function() {
    const otpBoxes = document.querySelectorAll('.otp-box');
    const otpCode = Array.from(otpBoxes).map(box => box.value).join('');

    if (otpCode.length < 6) {
        showNotification("Input OTP please to continue.", false);
    } else {
       
        location.href = 'settings.html';
    }
});

function showNotification(message, isSuccess) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    
    notificationMessage.textContent = message;
    notification.style.display = 'block';
    notification.style.right = '20px'; 

    if (!isSuccess) {
        setTimeout(() => {
            
            const otpBoxes = document.querySelectorAll('.otp-box');
            const otpCode = Array.from(otpBoxes).map(box => box.value).join('');

            if (otpCode.length === 6) {
                notification.classList.add('success');
                notificationMessage.textContent = "OTP keyed in.";
                setTimeout(() => {
                    hideNotification();
                }, 1000); 
            }
        }, 2000); 
    }
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.style.right = '-250px'; 
    setTimeout(() => {
        notification.style.display = 'none'; 
        notification.classList.remove('success'); 
    }, 500); 
}

document.getElementById('resend-link').addEventListener('click', function(event) {
    event.preventDefault();
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        document.getElementById('success-message').style.display = 'flex';
    }, 5000); 

    setTimeout(() => {
        modal.style.display = 'none';
        document.querySelector('.loader').style.display = 'block'; 
        document.getElementById('success-message').style.display = 'none';
    }, 8000); 
});
