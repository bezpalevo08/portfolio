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

            const name = document.createElement('p');
            name.innerText = element.name;
            
            const proffesion = document.createElement('p');
            proffesion.innerText = element.proffesion;

            const review = document.createElement('p');
            review.innerText = element.reviewText;

            slide.append(name);
            slide.append(proffesion);
            slide.append(review);
            elementTrack.append(slide);
        });
    }
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

    creatorOfSlides(reviews, track)
}

initialSlider();

