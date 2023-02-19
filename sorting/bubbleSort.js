function swap(list, index1, index2) {
  const temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}

function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
      }
    }
  }
}
const list = [];
for (let i = 0; i < 100; i++) {
  list.push(Math.random() * 1000000);
}
bubbleSort(list);
console.log(
  list.every((_, index) => index === 0 || list[index] >= list[index - 1])
);
