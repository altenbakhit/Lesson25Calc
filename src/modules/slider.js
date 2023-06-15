const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    const timeInterval = 2000
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');
    sliderBlock.appendChild(dotsContainer);

    let currentSlide = 0
    let interval

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const createDots = () => {
        slides.forEach(() => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dotsContainer.appendChild(dot);
        });
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }


        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide(timeInterval)
        }
    }, true)

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)

    startSlide()
    createDots()

}

export default slider