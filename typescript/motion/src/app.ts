import {Composable, PageComponent, PageItemComponent} from './components/page/page.js';
import {ImageComponent} from "./components/page/item/image.js";
import {NoteComponent} from "./components/page/item/note.js";
import {TodoComponent} from "./components/page/item/todo.js";
import {VideoComponent} from "./components/page/item/video.js";
import {Component} from "./components/component.js";
import {InputDialog} from "./components/dialog/dialog.js";
import {MediaSectionInput} from "./components/dialog/input/media-input.js";

class App {
    private readonly page: Component & Composable;

    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);


        const note = new NoteComponent(`Note Title`, `Note Body`);
        this.page.addChild(note);

        const video = new VideoComponent(`Video Title`, `https://www.youtube.com/embed/cii6ruuycQA`);
        this.page.addChild(video);

        const todo = new TodoComponent(`Todo Title`, `Todo Check`);
        this.page.addChild(todo);

        const imageBtn = document.querySelector(`#new-image`)! as HTMLButtonElement;
        imageBtn.addEventListener(`click`, () => {
            const dialog = new InputDialog();
            const mediaSection = new MediaSectionInput();
            dialog.addChild(mediaSection);
            dialog.attachTo(dialogRoot);


            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            })
            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(mediaSection.title, mediaSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            })
        });
    }
}

new App(document.querySelector(`.document`)! as HTMLElement, document.body);