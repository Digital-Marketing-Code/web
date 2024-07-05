const popupWhatsApp = () => {
    const btnClosePopup = document.querySelector('.closePopup');
    const btnOpenPopup = document.querySelector('.whatsapp-button');
    const popup = document.querySelector('.popup-whatsapp');
    const sendBtn = document.getElementById('send-btn');

    const togglePopup = () => popup.classList.toggle('is-active-whatsapp-popup');

    btnClosePopup.addEventListener("click", togglePopup);
    btnOpenPopup.addEventListener("click", () => {
        togglePopup();
        popup.style.animation = "fadeIn .6s 0.0s both";
    });

    sendBtn.addEventListener("click", () => {
        const msg = document.getElementById('whats-in').value.replace(/ /g, "%20");
        window.open('https://wa.me/+51952346983?text=' + msg, '_blank');
    });

    setTimeout(togglePopup, 3000);
};

popupWhatsApp();  