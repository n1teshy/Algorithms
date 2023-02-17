function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i;
    while (j > 0 && list[j - 1] > list[j]) {
      const temp = list[j - 1];
      list[j - 1] = list[j];
      list[j] = temp;
      j--;
    }
  }
}

const list = [];
for (let i = 0; i < 15; i++) {
  list.push(Math.floor(Math.random() * 100));
}
insertionSort(list);
console.log(list.every((_, index) => list[index - 1] === undefined || list[index] >= list[index - 1]))
