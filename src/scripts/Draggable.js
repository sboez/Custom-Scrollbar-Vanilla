export default class Draggable {
    constructor(scrollbar) {
        this.scrollbar = scrollbar;

        let startX;
        let scrollLeft;

        this.scrollbar.gallery.addEventListener('mousedown', (e) => {
            this.isDown = true;
            startX = e.pageX - this.scrollbar.gallery.offsetLeft;
            scrollLeft = this.scrollbar.gallery.scrollLeft;
        });

        this.scrollbar.gallery.addEventListener('mouseleave', () => {
            this.isDown = false;
        });

        this.scrollbar.gallery.addEventListener('mouseup', () => {
            this.isDown = false;
        });

        this.scrollbar.gallery.addEventListener('mousemove', (e) => {
            if (!this.isDown) {
                return;
            }

            e.preventDefault();

            const x = e.pageX - this.scrollbar.gallery.offsetLeft;
            const walk = (x - startX) * 2;
            this.scrollbar.gallery.scrollLeft = scrollLeft - walk;
        });
    }
}