// 1、二分法模板
function binarySearch(arr, target) {
    if (!arr.length) return -1;
    let start = 0;
    let end = arr.length - 1;
    let mid = null;
    while(start + 1 < end) { // *
        mid = start + (end - start) / 2;  // *
        if (arr[mid] === target) {
            end = mid
        } else if (arr[mid] < target) {
            start = mid    
        } else if (arr[mid] > target) {
            end = mid
        }
    }
    if(arr[start] === target) {
        return start;
    }
    if(arr[end] === target) {
        return end;
    }

    return -1;
}

/**
 * 二分搜索有 4 大基础变种题：
1. 查找第一个值等于给定值的元素
2. 查找最后一个值等于给定值的元素
3. 查找第一个大于等于给定值的元素
4. 查找最后一个小于等于给定值的元素
5. 旋转数组查找
*/

//查找第一个元素：
let searchFirstEqualElement = (nums, target) => {
    let [left, right] = [0, nums.length-1]
    while (left <= right) {
      pivot = left + Math.floor((right - left) / 2)
      if (nums[pivot] > target) {
        right = pivot - 1
      } else if (nums[pivot] < target) {
        left = pivot + 1
      } else {  // 上面全都是二分查找的基本代码，一模一样
        // 就差等于的情况，我们想找到第一个与 target 相等的元素
        if ((pivot === 0) || (nums[pivot-1] !== target)) { 
          // 当上面这两种情况发生说明我们找到了『左边界』
          // 1. index等于0，没什么好说
          // 2. 当nums[pivot-1]再左边一个元素不等于target说明已经到了左边界
          return pivot
        }
        // 要不然就右边左移，也就是把pivot往前看
        right = pivot - 1
      }
    }
    return -1
}

// 查找last：
// 二分查找最后一个与 target 相等的元素，时间复杂度 O(logn)
let searchLastEqualElement = (nums, target) => {
    let [left, right] = [0, nums.length-1]
    while (left <= right) {
      pivot = left + Math.floor((right - left) / 2)
      if (nums[pivot] > target) {
        right = pivot - 1
      } else if (nums[pivot] < target) {
        left = pivot + 1
      } else {
        // 上面全都是二分查找的基本代码，一模一样
        // 就差等于的情况，我们想找到最后一个与 target 相等的元素
        if ((pivot === nums.length-1) || (nums[pivot+1] != target)) { 
          // 当上面这两种情况发生说明我们找到了『右边界』
          // 有上面一个方法，这个就不赘述
          return pivot
        }
        left = pivot + 1
      }
    }
    return -1
}