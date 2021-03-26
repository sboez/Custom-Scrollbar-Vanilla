export default class Scrollbar {
    constructor() {
        this.gallery = document.querySelector('.gallery');
        this.scrollbar = document.querySelector('.scrollbar');
        this.scrollbarCursor = document.querySelector('.icon-cursor');

        this.isDown = false;

        this.init();
    }

    init() {
        this.gallery.addEventListener('scroll', () => this.cursorMove(), false);

        this.scrollbar.addEventListener('mousedown', (e) => this.onMouseDown(e), false);
        document.addEventListener('mouseup', () => this.onMouseUp(), false);
        document.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
    }

    cursorMaxLeft() {
        const maxCursorWidth = this.scrollbarCursor.offsetWidth;

        return this.scrollbar.offsetWidth - maxCursorWidth;
    }

    cursorMove() {
        const scrollRatio = this.gallery.scrollLeft / (this.gallery.scrollWidth - this.gallery.clientWidth);

        this.scrollbarCursor.style.left = this.cursorMaxLeft() * scrollRatio + 'px';
    }

    onMouseDown(e) {
        e.preventDefault();
        this.isDown = true;

        this.initialLeft = this.scrollbarCursor.offsetLeft;
        this.initialX = e.clientX;
    }

    onMouseUp() {
        this.isDown = false;
    }

    onMouseMove(e) {
        e.preventDefault();
        if (this.isDown) {
            const mouseDeltaX = e.clientX - this.initialX;
            let newLeft = mouseDeltaX + this.initialLeft;
            newLeft = Math.min(newLeft, this.cursorMaxLeft());
            newLeft = Math.max(newLeft, 0);

            const scrollRatio = newLeft / this.cursorMaxLeft();
            this.gallery.scrollLeft = scrollRatio * (this.gallery.scrollWidth - this.gallery.clientWidth);

            this.scrollbarCursor.style.left = newLeft + 'px';
        }
    }
}
