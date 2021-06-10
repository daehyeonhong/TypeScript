{
    interface Stack<T> {
        readonly size: number;

        push(value: T): void;

        pop(): T;
    }

    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0;
        private head?: StackNode<T>;

        constructor(private capcity: number) {
        }

        get size() {
            return this._size;
        }

        pop(): T {
            // null == undefined, null !== undefined
            if (this.head == null) {
                throw new Error(`Stack is empty!`);
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }

        push(value: T): void {
            if (this.size === this.capcity) {
                throw new Error(`Stack is full!`);
            }
            const node = {value, next: this.head}
            this.head = node;
            this._size++;
        }

    }

    const stack = new StackImpl<string>(10);
    stack.push('Hong 1');
    stack.push('Bob 2');
    stack.push('Steve 3');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }
    const number = new StackImpl<number>(10);
    number.push(3124);
    number.push(2321);
    number.push(4215);
    while (number.size !== 0) {
        console.log(number.pop());
    }
}