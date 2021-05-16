var arr = [0, 1, 0, 3, 12];

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
        for (let j = i; j < arr.length - 1; j++) {
            let tmp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log(arr);