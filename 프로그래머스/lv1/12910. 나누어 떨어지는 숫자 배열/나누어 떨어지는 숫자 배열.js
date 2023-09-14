function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b) => a-b).forEach(element => {
        element % divisor === 0 ? answer.push(element) : null;
    });
    answer.length === 0 ? answer.push(-1) : null;
    return answer;
}