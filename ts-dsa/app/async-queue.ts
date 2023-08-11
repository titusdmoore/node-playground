interface MyNode<T> {
    val: T;
    next: MyNode<T> | null;
}

class AysncQueue<T> {
    head: MyNode<T> | undefined;
    tail: MyNode<T> | undefined;

    constructor() {
        this.head = undefined;
    }

    enqueue(val: T): MyNode<T> {
        let node: MyNode<T> = {
            val,
            next: null
        };

        if ( this.head == undefined ) {
            this.head = node;
            return node;
        }

        if ( this.tail === undefined ) {
            this.head.next, this.tail = node;
            return node;
        }

        this.tail.next, this.tail = node;
        return node;
    }

    async dequeue(): Promise<MyNode<T>> {

    }
}
