// 양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(n) {
    var answer = Array.from({length: n}, ()=> Array(n).fill(0));
    let num = 1;
    let x =0, y=0;
    let dx = [0,1,0,-1];
    let dy = [1,0,-1,0];
    let dir = 0;
    for(let i=0; i<n*n; i++){
        answer[x][y] = num++;
        let nx = x + dx[dir];
        let ny = y + dy[dir];
        if(nx < 0 || ny < 0 || nx >= n || ny >= n || answer[nx][ny] !==0){
            dir = (dir+1)%4;
            nx = x+dx[dir];
            ny = y+dy[dir];
        }
        x=nx;
        y=ny;
    }
    
    return answer;
}