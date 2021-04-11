/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let res = [];
    res[0] = 1;
    let flag_2 = 0,
        flag_3 = 0,
        flag_5 = 0;
    let i = 1;
    while (i < n) {
        let tmp1 = res[flag_2] * 2;
        let tmp2 = res[flag_3] * 3;
        let tmp3 = res[flag_5] * 5;
        if (tmp1 > tmp2) {
            if (tmp3 > tmp2) {
                res[i] = tmp2;
                flag_3++;
            } else if (tmp2 > tmp3) {
                res[i] = tmp3;
                flag_5++;
            } else {
                res[i] = tmp3;
                flag_3++;
                flag_5++;

            }
        } else if (tmp1 < tmp2) {
            if (tmp3 < tmp1) {
                res[i] = tmp3;
                flag_5++;
            } else if (tmp3 > tmp1) {
                res[i] = tmp1;
                flag_2++;
            } else {
                res[i] = tmp1;
                flag_2++;
                flag_5++;
            }
        } else {
            if (tmp3 < tmp1) {
                res[i] = tmp3;
                flag_5++;
            } else if (tmp3 > tmp1) {
                res[i] = tmp1;
                flag_2++;
                flag_3++;

            } else {
                res[i] = tmp1;
                flag_3++;
                flag_2++;
                flag_5++;
            }
        }
        i++;
    }
    return res[i - 1];
};

console.log(nthUglyNumber(17));