function copyArrayElements(source, target, start) {
  while (start < source.length) {
    target.push(source[start++]);
  }
}

function merge(list1, list2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      result.push(list1[i++]);
    } else {
      result.push(list2[j++]);
    }
  }
  copyArrayElements(list1, result, i);
  copyArrayElements(list2, result, j);
  return result;
}

function mergeSort(list) {
    let result = list;
    if(list.length > 1){
      const mid = Math.floor(list.length / 2);
      const sub1 = mergeSort(list.slice(0, mid));
      const sub2 = mergeSort(list.slice(mid, list.length));
      result = merge(sub1, sub2);
    }
    return result;
}
console.log(mergeSort([4,51,5,4,564,36,446,7,5,75,136,4316,23]));
