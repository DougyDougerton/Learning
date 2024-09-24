function reverseArray(arr) {
    let left = 0; // Starting pointer
    let right = arr.length - 1; // Ending pointer

    while (left < right) {
        // Swap the elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move the pointer inward
        left++;
        right--;
    }
    return arr;
}

let numbers = [1,2,3,4,5];
console.log("Original", [...numbers]);
console.log("Reversed", reverseArray(numbers));