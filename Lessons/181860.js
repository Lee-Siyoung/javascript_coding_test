// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.

function solution(arr, flag) {
  var answer = [];
  for(let i=0; i<flag.length; i++){
      if(flag[i]){
          for(let j=0; j<arr[i]*2; j++)
          answer.push(arr[i])
      } else {
          answer.splice(-arr[i])
      }
  }
  return answer;
}