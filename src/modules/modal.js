const modal = () => {
    const modalElement = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modalElement.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth >= 768) {
                modalElement.style.display = 'block';
                modalElement.style.opacity = 0;

                modalElement.animate(
                    [
                        { opacity: 0 },
                        { opacity: 1 }
                    ],
                    {
                        duration: 500,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    }
                );
            } else {
                modalElement.style.display = 'block';
                modalElement.style.opacity = 1;
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modalElement.style.display = 'none';
    });
};

export default modal;
