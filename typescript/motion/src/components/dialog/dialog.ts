import {BaseComponent, Component} from "../component.js";
import {Composable} from "../page/page";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Component, Composable {
    closeListener?: OnCloseListener;
    submitListener?: OnSubmitListener;

    constructor() {
        super(`
        <dialog class="dialog">
            <div class="dialog_container">
                <button class="close">&times;</button>
                <div id="dialog_body"></div>
                <button class="dialog_submit">add</button>
            </div>
        </dialog>`);

        const closeBtn = this.element.querySelector(`.close`)! as HTMLElement;
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        }
        const submitBtn = this.element.querySelector(`.dialog_submit`)! as HTMLElement;
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }

    setOnSubmitListener(listener: OnSubmitListener) {
        this.submitListener = listener;
    }

    addChild(child: Component) {
        const body = this.element.querySelector(`#dialog_body`)! as HTMLElement;
        child.attachTo(body);
    }

}