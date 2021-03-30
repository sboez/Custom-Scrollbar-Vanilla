import './styles/main.sass';
import Gallery from './scripts/Gallery';
import Scrollbar from './scripts/Scrollbar'
import Draggable from './scripts/Draggable';
import Modal from './scripts/Modal';

export default class App {
    constructor() {
        new Gallery();
        this.scrollbar = new Scrollbar();
        new Draggable(this.scrollbar);
        new Modal();
    }
}

new App();