function solution(n) {
    const s = '수박';
    if(n%2===0) return s.repeat(n/2);
    else return s.repeat(n/2) + '수';
}