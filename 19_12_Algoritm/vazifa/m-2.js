function mergeIntervalsWithoutSorting(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let isMerged = false;

        for (let j = 0; j < arr2.length; j++) {
            let hozirgi = arr2[j];

            if (a[0] <= hozirgi[1] && a[1] >= hozirgi[0]) {
                hozirgi[0] = Math.min(hozirgi[0], a[0]);
                hozirgi[1] = Math.max(hozirgi[1], a[1]);
                isMerged = true;
                break;
            }
        }

        if (!isMerged) {
            arr2.push([...a]);
        }
    }

    return arr2;
}

let arr = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [17, 20],
    [16, 30]
];

let result = mergeIntervalsWithoutSorting(arr);
console.log(result);
