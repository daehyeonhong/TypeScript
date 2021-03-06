{
    interface Stack {
        readonly size: number;

        push(value: string): void;

        pop(): string;
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capcity: number) {}

        get size() {
            return this._size;
        }

        pop(): string {
            // null == undefined, null !== undefined
            if (this.head == null) {
                throw new Error(`Stack is empty!`);
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }

        push(value: string): void {
            if (this.size === this.capcity) {
                throw new Error(`Stack is full!`);
            }
            const node: StackNode = {value, next: this.head}
            this.head = node;
            this._size++;
        }

    }

    const stack = new StackImpl(10);
    stack.push('Hong 1');
    stack.push('Bob 2');
    stack.push('Steve 3');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }
}