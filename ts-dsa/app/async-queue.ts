interface MyNode {
    val: () => number;
    next: MyNode | null;
}

class AsyncQueue {
    head: MyNode | undefined;
    tail: MyNode | undefined;
    len: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.len = 0;
    }

    enqueue(val: () => number): MyNode {
        let node: MyNode = {
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
        this.len++;
        return node;
    }

    async dequeue(): Promise<{ val: number, node: MyNode } | null> {
        if ( this.head === undefined ) {
            return null;
        }

        let node = this.head;
        this.head = this.head.next ?? undefined;

        if (this.head === this.tail) {
            this.tail == undefined;
        }

        this.len--;
        console.log("ran")

        return new Promise((resolve, _reject) => {
            let val = node.val();
            resolve({ val, node });
        })
    }
}

let aq = new AsyncQueue();

for (let i = 0; i < 10000; i++) {
    aq.enqueue(function() {
        let temp = -1;
        setTimeout(() => {
            temp = i;
        }, Math.floor(Math.random() * 1000))

        return temp;
    });
}

for ( let i = aq.len; i > 0; i-- ) {
    (async () => {
        await aq.dequeue().then((val) => {
            console.log(val)
        });
    })();
}
