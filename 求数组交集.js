var nums1 = [1, 2, 2, 1, 3];
var nums2 = [2, 2, 3];

function union(nums1, nums2) {
    let res = [];
    nums1.forEach(val => {
        if (nums2.indexOf(val) !== -1) {
            res.push(val);
        }
    });
    return res;
}
console.log(union(nums1, nums2));