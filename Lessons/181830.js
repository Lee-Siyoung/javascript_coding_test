// 이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
    const len1 = arr.length;
    const len2 = arr[0].length;
    if(len1 > len2){
        return arr.map(row=>[...row, ...Array(len1-len2).fill(0)])
    } else if(len1 < len2){
        for(let i=0; i<len2-len1; i++){
            arr.push(Array(len2).fill(0))
        }
    }
    return arr
}