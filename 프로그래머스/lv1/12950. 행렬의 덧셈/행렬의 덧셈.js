function solution(arr1, arr2) {
    const 행의길이 = arr1.length;
    const 열의길이 = arr1[0].length;
    const arr = new Array(행의길이).fill(0).map(() => new Array(열의길이));

    for(let i = 0; i < 행의길이; i++){
        for(let j = 0; j < 열의길이; j++){
            arr[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return arr;
}