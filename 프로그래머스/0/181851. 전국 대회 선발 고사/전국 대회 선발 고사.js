function solution(rank, attendance) {
    let answer = 0;
    let result = {};
    attendance.filter((item, index) => {
        if (item) {
            result[rank[index]] = index;
            }})
    let index = 0;
    rank.sort().forEach(item => {
        if(result[item] || result[item] === 0) {
            if (index === 0) {
                answer += 10000 * result[item];
                } else if (index === 1) {
                    answer += 100 * result[item];
                    } else if (index === 2) {
                        answer += result[item];
                        }
            index++;
            }              
        });
    return answer;
}