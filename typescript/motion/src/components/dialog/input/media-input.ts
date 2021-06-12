import {BaseComponent} from "../../component.js";

export class MediaSectionInput extends BaseComponent<HTMLElement> {
    constructor() {
        super(`
            <div>
                <div>
                    <label for="title">Title</label>
                    <input type="text" id="title">
                </div>
                <div>
                    <label for="url">URL</label>
                    <input type="text" id="url">
                </div>
            </div>
`);
    }

    get title(): string {
        const element = this.element.querySelector(`#title`)! as HTMLInputElement;
        return element.value;
    }

    get url(): string {
        const element = this.element.querySelector(`#url`)! as HTMLInputElement;
        return element.value;
    }
}