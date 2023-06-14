const modal = () => {
    const modalElement = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

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

    modalElement.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modalElement.style.display = 'none';
        }
    })
};

export default modal;
