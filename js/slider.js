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

const creatorOfSlides = (arrayReviews, elementTrack) => {
    if (arrayReviews && arrayReviews.length > 0) {
        arrayReviews.forEach(element => {
            const slide = document.createElement('div');

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

    arrowLeft.className = 'arrow arrow-left';
    arrowRight.className = 'arrow arrow-right';

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

const initialSlider = () => {
    const orientirSection = document.querySelector('#myWorks');

    const slider = document.createElement('div');
    slider.className = 'slider';
    orientirSection.after(slider);
    
    const wrapperHidden = document.createElement('div');
    wrapperHidden.className = 'slider__wrapper-hidden';
    slider.append(wrapperHidden);
    
    const track = document.createElement('div');
    track.className = 'slider__track';
    wrapperHidden.append(track);

    creatorOfSlides(reviews, track);
    creatorOfArrows(slider);
    creatorOfPagination(slider, reviews.length);
}

initialSlider();