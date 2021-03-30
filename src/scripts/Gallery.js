import grogu_01 from '../assets/images/grogu/grogu_01.jpg'
import grogu_02 from '../assets/images/grogu/grogu_02.jpg'
import grogu_03 from '../assets/images/grogu/grogu_03.jpg'
import grogu_04 from '../assets/images/grogu/grogu_04.jpg'
import grogu_05 from '../assets/images/grogu/grogu_05.jpg'

export default class Gallery {
    constructor() {
        this.grogu = [grogu_01, grogu_02, grogu_03, grogu_04, grogu_05];

        for (let i = 0; i < 10; ++i) {
            this.addList();
        }
    }

    addList() {
        this.list = document.createElement("li");
        this.list.className = 'gallery__item';

        const gallery = document.querySelector(".gallery");
        gallery.appendChild(this.list);

        this.addImg();
    }

    addImg() {
        this.img = document.createElement("img");
        this.img.src = this.grogu[this.getRandomInt(this.grogu.length)];

        const src = this.list;
        src.appendChild(this.img);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}