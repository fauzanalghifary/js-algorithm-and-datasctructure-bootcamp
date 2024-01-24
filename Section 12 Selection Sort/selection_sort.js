// // LEGACY VERSION (non ES2015 syntax)
// function selectionSort(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         let lowest = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }
//         if (i !== lowest) {
//             //SWAP!
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }

// ES2015 VERSION
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length - 1; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
