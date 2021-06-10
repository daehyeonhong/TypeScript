{
    interface Stack {
        readonly size: number;

        push(value: string): void;

        pop(): string;
    }

    class stringStack implements Stack {
        private HEAD: string;
        readonly size: number;

        pop(): string {
            return "";
        }

        push(value: string): void {
            this.HEAD = value.toString();

        }

    }

}