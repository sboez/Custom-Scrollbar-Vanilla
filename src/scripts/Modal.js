export default class Modal {
    constructor() {
        this.modal = document.querySelector('.modal');

        this.init();
    }

    init() {
        if (!this.modal) {
            return;
        }

        const modalImg = this.modal.querySelector('.modal__content');
        const modalClose = this.modal.querySelector('.btn-close');
        const boxes = [...document.querySelectorAll('img')];

        for (const box of boxes) {
            box.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                this.modal.style.display = 'block';
                modalImg.src = box.src;
            });
        }

        modalClose.addEventListener('click', () => {
            this.modal.style.display = 'none';
        });
    }
}
