// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c, d) {
  const dice = [a,b,c,d];
  const counts = {};
  for(const num of dice){
      counts[num] = (counts[num] || 0)+1;  // 숫자별 등장 횟수
  }
  // 예: [2, 2, 3, 4] -> counts = {2: 2, 3: 1, 4: 1}

  const entries = Object.entries(counts);  // 객체를 [값, 횟수] 형태의 배열로 변환
  const nums = entries.map(e=>Number(e[0]));  // 값들만 숫자 형태로 꺼냄 → ['2', '3'] → [2, 3]
  const freqs = entries.map(e=>e[1]);  // 빈도수만 추출 → [2, 1, 1]
  if(entries.length === 1){
      return 1111*nums[0];
  } else if(entries.length === 2){
      if(freqs.includes(3)){
          const p = nums[freqs.indexOf(3)];  // 3개 나온 숫자
          const q = nums[freqs.indexOf(1)];
          return Math.pow(10*p+q,2);
      } else {
          return (nums[0]+nums[1])*Math.abs(nums[0]-nums[1]);
      }
  } else if(entries.length === 3){
      const pair = nums[freqs.indexOf(2)]; // 2개 나온 숫자
      const others = nums.filter((_,i)=>freqs[i]===1);   // 1개씩 나온 숫자 2개
      return others[0]*others[1];
  } else {
      return Math.min(...nums);
  }
}