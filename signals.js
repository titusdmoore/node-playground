/*
 * Signals
 *
 */
let state = {
    values: {},
    callbacks: {},
};

function useSignal(value = null) {
    let signal = Symbol();
    state.values[signal] = value;
    state.callbacks[signal] = [];
    return [
        () => state.values[signal],
        (value) => {
            state.values[signal] = value;
        }
    ];
}
let [sigVal, setSigVal] = useSignal(0);
console.log(sigVal); // 0

let testObj = {
    a: 1,
    setSetA: function (val) {
        this.a = val;
    }
}

console.log(testObj.a); // 1
testObj.setSetA(2);
console.log(testObj.a); // 2

