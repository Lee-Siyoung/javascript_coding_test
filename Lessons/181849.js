// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_str) {
    var answer = 0;
    for(let i of num_str){
        answer+=Number(i);
    }
    return answer;
}