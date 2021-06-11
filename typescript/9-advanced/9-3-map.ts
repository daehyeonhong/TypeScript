{
    type Video = {
        title: string;
        author: string;
    };

    type Optional<T> = {
        [P in keyof T]?: T[P]; // for...in
    }

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }

    type VideoOptional = Optional<Video>;

    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'dog'
    }

    animal.name = 'dog';

    const video: ReadOnly<Video> = {
        title: 'hahaha', author: 'hong'
    }

    type NullAble<T> = {
        [P in keyof T]: T[P] | null;
    }

    const obj2: NullAble<Video> = {
        title: 'hi', author: null
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }

    /*type VideoOptional = {
        title?: string;
        author?: string;
    };

    type VideoReadOnly = {
        readonly title: string;
        readonly author: string;
    }*/

}