let array = [23, 7, 19, 98, 21, 8, 1998, 11, 9, 20, 22];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);