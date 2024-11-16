const reviews = [
    {
        name: 'Иван',
        proffesion: 'фотограф',
        reviewText: 'все было прекрасно.',
        srcAvatar: '',
    },
    {
        name: 'Лера',
        proffesion: 'бариста',
        reviewText: 'отличный сайт! сделали в короткие сроки.',
        srcAvatar: '',
    },
    {
        name: 'Ирина',
        proffesion: 'художник',
        reviewText: 'все отлично, понравилось',
        srcAvatar: '',
    },
    {
        name: 'Кристина',
        proffesion: 'фотограф',
        reviewText: 'прекрасный сайт! все очень понравилось',
        srcAvatar: '',
    },
    {
        name: 'Артур',
        proffesion: 'сварщик',
        reviewText: 'заказал сделать сайт для работы. Результатом доволен.',
        srcAvatar: '',
    }
]

const minMove = 20;
let slider = null;
let track = null;
let currentWidthMove = null;
let countSlide = 0;
let listControlButtons = null;
let startPoint = 0;
let endPoint = 0;
let currentMove = 0;

const creatorOfSlides = (arrayReviews, elementTrack) => {
    if (arrayReviews && arrayReviews.length > 0) {
        arrayReviews.forEach(element => {
            const slide = document.createElement('div');
            slide.className = 'slide';

            const nameElement = document.createElement('p');
            nameElement.innerText = element.name;
            
            const proffesionElement = document.createElement('p');
            proffesionElement.innerText = element.proffesion;

            const reviewElement = document.createElement('p');
            reviewElement.innerText = element.reviewText;

            slide.append(nameElement);
            slide.append(proffesionElement);
            slide.append(reviewElement);
            elementTrack.append(slide);
        });
    }
}

const creatorOfArrows = (slider) => {
    const arrowLeft = document.createElement('button');
    const arrowRight = document.createElement('button');

    arrowLeft.className = 'arrow arrow--left';
    arrowRight.className = 'arrow arrow--right';

    arrowLeft.setAttribute('data-arrow', 'left');
    arrowRight.setAttribute('data-arrow', 'right');

    slider.prepend(arrowLeft);
    slider.prepend(arrowRight);
}

const creatorOfPagination = (slider, reviewsLength) => {
    const listButtons = document.createElement('div');
    listButtons.className = 'list-buttons';

    let i = 0;
    while (i < reviewsLength) {
        const buttonPagination = document.createElement('button');
        buttonPagination.className = 'button-pagination';

        if (i === 0) {
            buttonPagination.classList.add('active');
        }

        buttonPagination.setAttribute('data-pagination', 'button');
        listButtons.append(buttonPagination);
        
        i++;
    }

    slider.append(listButtons);
}

const motion = () => {
    track.style.transform = `translateX(-${countSlide * currentWidthMove}px)`;
    changeStyleButtonPagination();
}

const choosingDirection = (direction) => {
    if (direction === 'left') {
        countSlide = countSlide > 0 ? countSlide -= 1 : reviews.length - 1;
    } else if (direction === 'right') {
        countSlide = countSlide < reviews.length - 1 ?  countSlide += 1 : countSlide = 0;
    }
}

const changeStyleButtonPagination = () => {
    const activeButton = slider.querySelector('.button-pagination.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    listControlButtons[countSlide].classList.add('active');
}

const handlerEvent = (event) => {
    const isArrowLeft = event.target.closest('[data-arrow="left"]');
    const isArrowRight = event.target.closest('[data-arrow="right"]');
    const isButtonPagination = event.target.closest('[data-pagination="button"]');
    track = slider.querySelector('#track');

    if (isButtonPagination) {
        countSlide = Array.from(listControlButtons).indexOf(isButtonPagination);
    }

    if (isArrowLeft) {
        choosingDirection('left');
    }
    else if (isArrowRight) {
        choosingDirection('right');
    }
    motion();
}

const handlerMove = () => {
    currentMove = startPoint - endPoint;

    if (Math.abs(currentMove) > minMove) {
        currentMove > 0 ? choosingDirection('right') : choosingDirection('left');
        motion();
    }
}

const startPoindHandler = (e) => {
    startPoint = e.clientX;
}

const endPoindHandler = (e) => {
    endPoint = e.clientX;
    handlerMove();
}

const initialSlider = () => {
    const orientirSection = document.querySelector('#myWorks');

    slider = document.createElement('div');
    slider.id = 'slider';
    slider.className = 'slider';
    orientirSection.after(slider);
    
    const wrapperHidden = document.createElement('div');
    wrapperHidden.className = 'slider__wrapper-hidden';
    slider.append(wrapperHidden);

    
    track = document.createElement('div');
    track.id = 'track';
    track.className = 'slider__track';
    wrapperHidden.append(track);

    creatorOfSlides(reviews, track);
    creatorOfArrows(slider);
    creatorOfPagination(slider, reviews.length);
    listControlButtons = slider.querySelectorAll('.button-pagination');

    currentWidthMove = slider.querySelector('.slide').offsetWidth;

    slider.addEventListener('click', handlerEvent);
    slider.addEventListener('mousedown', startPoindHandler);
    slider.addEventListener('mouseup', endPoindHandler);
}

initialSlider();
