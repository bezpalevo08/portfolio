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

let slider = null;
let track = null;
let currentWidthMove = null;
let countSlide = 0;

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
    const listButtons = document.createElement('ol');
    listButtons.className = 'list-buttons';

    let i = 0;
    while (i < reviewsLength) {
        const listItem = document.createElement('li');
        const buttonPagination = document.createElement('button');
        buttonPagination.className = 'button-pagination';

        listItem.append(buttonPagination);
        listButtons.append(listItem);
        
        i++;
    }

    slider.append(listButtons);
}

const motion = () => {
    track.style.transform = `translateX(-${countSlide * currentWidthMove}px)`;
}

const choosingDirection = (direction) => {
    if (direction === 'left') {
        countSlide = countSlide > 0 ? countSlide -= 1 : reviews.length - 1;
    } else if (direction === 'right') {
        countSlide = countSlide < reviews.length - 1 ?  countSlide += 1 : countSlide = 0;
    }
}

const handlerEvent = (event) => {
    const isArrowLeft = event.target.closest('[data-arrow="left"]');
    const isArrowRight = event.target.closest('[data-arrow="right"]');
    track = slider.querySelector('#track');

    if (isArrowLeft) {
        choosingDirection('left');
    }
    else if (isArrowRight) {
        choosingDirection('right');
    }
    motion();
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

    currentWidthMove = slider.querySelector('.slide').offsetWidth;

    slider.addEventListener('click', handlerEvent);
}

initialSlider();