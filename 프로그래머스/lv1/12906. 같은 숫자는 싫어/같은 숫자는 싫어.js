function solution(arr) {
    const answer = [arr[0]];
    arr.forEach(a => {
        if(answer[answer.length - 1] !== a) answer.push(a);
    })
    return answer;
}