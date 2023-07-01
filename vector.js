class Vector {
    length = 0;
    #values;
    #capacity;

    constructor (capacity = 10) {
        this.#capacity = capacity;
        this.#values = new Uint16Array(capacity);
    }

    peek(index) {
        if (index < this.length) {
            return this.#values[index];
        }

        return undefined;
    }

    insert(value, index = null) {
        index = index ?? this.length;

        // Increase values size 
        if ( this.length == this.#capacity ) {
            let old = this.#values;
            this.#capacity = this.#capacity * 2;
            this.#values = new Uint16Array(this.#capacity);

            // Populate new arr with old values
            for ( let i = 0; i < this.length; i++ ) {
                this.#values[i] = old[i];
            }
        }

        let iter = index;
        let prevNode = this.#values[index];
        while ( iter <= this.length ) {
            let workingValue = this.#values[iter + 1];
            this.#values[iter + 1] = prevNode;
            prevNode = workingValue;
            iter++;
        }
        
        this.#values[index] = value;
        this.length++;
    }

    remove(index) {
        if (index >= this.length) return undefined;
        
        let value = this.#values[index];
        this.#values[index] = 0;

        this.length--;

        let iter = this.length;
        let prevNode = this.#values[iter];
        this.#values[iter] = 0;
        while ( iter > index ) {
            let workingValue = this.#values[iter - 1];
            this.#values[iter - 1] = prevNode;
            prevNode = workingValue;
            iter--;
        }

        if ( this.length < this.#capacity / 2 ) {
            let old = this.#values;
            this.#capacity = this.#capacity / 2;
            this.#values = new Uint16Array(this.#capacity);

            // Populate new arr with old values
            for ( let i = 0; i < this.length; i++ ) {
                this.#values[i] = old[i];
            }
        }

        return value;
    }

    sort() {
        this.#rsort(0, this.length);
    }

    // Hide the recursive api from the exposed methods on the class
    #rsort(start, end) {
        if () {

        }
    }

    find() {

    }
 
    dump() {
        console.log(this.#values)
    }
}

let vec = new Vector(2);
vec.insert(4);
vec.dump();
vec.insert(5);
vec.insert(6);
vec.insert(7);
vec.insert(8);
vec.insert(9);
console.log(vec.peek(2))
vec.insert(2, 2);
vec.insert(1, 2);
vec.insert(3, 2);
vec.dump();
console.log(vec.peek(2))
console.log(vec.remove(1000))
console.log(vec.remove(2));
console.log(vec.remove(7));
vec.dump();
