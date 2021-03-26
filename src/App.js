import './styles/main.sass';
import Scrollbar from './scripts/Scrollbar'
import Draggable from './scripts/Draggable';

export default class App {
    constructor() {
        this.scrollbar = new Scrollbar();
        new Draggable(this.scrollbar);
    }
}

new App();