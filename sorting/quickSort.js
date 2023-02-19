function swap(list, index1, index2) {
  const temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}

function partition(list, low, high) {
  const pivotIndex = low;
  while (low < high) {
    while (list[low] <= list[pivotIndex]) {
      low++;
    }
    while (list[high] >= list[pivotIndex]) {
      high--;
    }
    if (low < high) {
      swap(list, low, high);
    }
  }
  if (pivotIndex < high) {
    swap(list, pivotIndex, high);
  }
  return pivotIndex < high ? high : pivotIndex;
}

function quickSort(list, low, high) {
  if (low < high) {
    const partitionIndex = partition(list, low, high);
    quickSort(list, low, partitionIndex - 1);
    quickSort(list, partitionIndex + 1, high);
  }
}

const list = [];
for (let i = 0; i < 100; i++) {
  list.push(Math.random() * 100);
}
quickSort(list, 0, list.length - 1);
console.log(
  list.every(
    (_, index) =>
      list[index - 1] === undefined || list[index] >= list[index - 1]
  )
);
