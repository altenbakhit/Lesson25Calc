import { animate } from "./helpers";

const modal = () => {
    const modalElement = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modalElement.querySelector('.popup-close');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalElement.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modalElement.style.display = 'none'
    })

    setTimeout(() => {
        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalElement.style.opacity = progress
            }
        });
    }, 1500)
};

export default modal;
