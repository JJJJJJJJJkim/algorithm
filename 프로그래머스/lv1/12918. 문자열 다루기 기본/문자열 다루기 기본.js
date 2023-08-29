function solution(s) {
    var regex = /^\d+$/;
    if(s.length === 4 || s.length === 6) return regex.test(s);
    else return false;
}