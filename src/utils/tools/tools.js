function downLoad(res) {
  let url = URL.createObjectURL(res.data);
  let a = document.createElement('a');
  let fileName = res.headers['content-disposition'].substring(9);
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a); //下载完成移除元素
  window.URL.revokeObjectURL(url); //释放blob对象
}

// 数组去重
function uniqueArr(arr) {
  let result = []; // 去重数组
  let obj = {}; // 去重对象
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      result.push(arr[i]);
      obj[arr[i]] = 1;
    }
  }
  return result
}
// 深拷贝，使用了递归 仅支持拷贝 数组（Array） 和 普通对象(object)
function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target);
    let cloneTarget = isArray ? [] : {};

    // 避免自身的循环引用导致爆栈
    if (map.has(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);

    if (isArray) {
      let index = -1;
      const length = target.length;
      while (++index < length) {
        cloneTarget[index] = clone(target[index], map);
      }
    } else {
      let keys = Object.keys(target);
      let index = -1;
      const length = keys.length;
      while (++index < length) {
        cloneTarget[keys[index]] = clone(target[keys[index]], map);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}

export default {
  downLoad,
  uniqueArr,
  clone,
}
