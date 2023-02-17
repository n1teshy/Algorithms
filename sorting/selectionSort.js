function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[minimumIndex]) {
        minimumIndex = j;
      }
    }
    const temp = list[i];
    list[i] = list[minimumIndex];
    list[minimumIndex] = temp;
  }
}

const list = [];
for(let i = 0; i < 15; i++){
    list.push(Math.random() * 100);
}
selectionSort(list);
console.log(list.every((_, index) => list[index - 1] === undefined || list[index] >= list[index - 1]))