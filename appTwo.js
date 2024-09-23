function* randomNumGen() {
    let result = [];
    for (let idx = 0; idx < 10; idx++) {
        result.push(Math.trunc(Math.random() * 100));
    }
    yield result;
}

function sort(NumbersToSort) {
    if (NumbersToSort.length <= 1) {
        return NumbersToSort;
    }

    let pivot = NumbersToSort[0];
    let smaller = [], bigger = [];

    for (let numberIdx = 1; numberIdx < NumbersToSort.length; numberIdx++) {
        let num = NumbersToSort[numberIdx];
        if(num < pivot) {
            smaller.push(num);
        } else {
            bigger.push(num);
        }
        
}
return [...sort(smaller), pivot, ...sort(bigger)];
}
let randomNumbers = randomNumGen().next().value;
console.log("Unsorted", randomNumbers);
console.log("Sorted", sort(randomNumbers));