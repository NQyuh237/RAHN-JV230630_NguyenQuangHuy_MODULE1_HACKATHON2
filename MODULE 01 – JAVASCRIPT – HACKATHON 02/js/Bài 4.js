// Cách 1: Sử dụng hàm sort
function sortArr(arr) {
    arr.sort((a, b) => b - a);
    return arr;
}

// Cách 2: Không sử dụng hàm sort 
function sortArray(arr) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] < newArr[j]) {
                let number = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = number;
            }
        }
    }
    return newArr;
}

arr = [11, 222, 33, 444, 55, 666, 77];
console.log(sortArr(arr));
console.log(sortArray(arr));
