// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  var answer = new Array(52).fill(0);
  for(let str of my_string){
      const ch = str.charCodeAt(0);
      if(ch >= 65 && ch <= 90){ // 대문자 A(65) ~ Z(90) → 0 ~ 25
          answer[ch - 65]++;
      } else {  // 소문자 a(97) ~ z(122) → 26 ~ 51
          answer[ch - 97 + 26]++
      }
  }
  return answer;
}