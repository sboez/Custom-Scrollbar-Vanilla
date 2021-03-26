import './styles/main.sass';
import Scrollbar from '../src/scripts/Scrollbar'

export default class App {
    constructor() {
        this.scrollbar = new Scrollbar();
    }

}

new App();