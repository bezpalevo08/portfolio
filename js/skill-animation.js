const listSkills = document.querySelector('#listSkills');

const toggleCards = (event) => {
    const isCard = event.target.closest('[data-skill-card]');
    const isCross = event.target.closest('[data-cross]');
    // найти фейд блок

    if (isCard) {
        isCard.classList.add('active');
        // добавить класс active на фейд блок
    }

    if (isCross) {
        const card = isCross.closest('[data-skill-card]');
        card.classList.remove('active');
        // удалить класс active с фейд блока
    }
}

listSkills.addEventListener('click', toggleCards);
