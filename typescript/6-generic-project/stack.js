{
    var StackImpl = /** @class */ (function () {
        function StackImpl(capcity) {
            this.capcity = capcity;
            this._size = 0;
        }
        Object.defineProperty(StackImpl.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        StackImpl.prototype.pop = function () {
            // null == undefined, null !== undefined
            if (this.head == null) {
                throw new Error("Stack is empty!");
            }
            var node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        };
        StackImpl.prototype.push = function (value) {
            if (this.size === this.capcity) {
                throw new Error("Stack is full!");
            }
            var node = { value: value, next: this.head };
            this.head = node;
            this._size++;
        };
        return StackImpl;
    }());
    var stack = new StackImpl(10);
    stack.push('Hong 1');
    stack.push('Bob 2');
    stack.push('Steve 3');
    while (stack.size !== 0) {
        console.log(stack.pop());
    }
    var number = new StackImpl(10);
    number.push(3124);
    number.push(2321);
    number.push(4215);
    while (number.size !== 0) {
        console.log(number.pop());
    }
}
