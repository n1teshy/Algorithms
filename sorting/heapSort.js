function getLeftChildPosition(index) {
  return index * 2 + 1;
}

function getRightChildPosition(index) {
  return index * 2 + 2;
}

function swap(list, index1, index2) {
  const temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}

function heapify(list, position, delimiter) {
  while (true) {
    const current = list[position];
    const leftChildPosition = getLeftChildPosition(position);
    const rightChildPosition = getRightChildPosition(position);
    const leftChild =
      leftChildPosition < delimiter
        ? list[getLeftChildPosition(position)]
        : undefined;
    const rightChild =
      rightChildPosition < delimiter
        ? list[getRightChildPosition(position)]
        : undefined;
    const diffLeft =
      (leftChild !== undefined ? leftChild : Number.MAX_VALUE) - current;
    const diffRight =
      (rightChild !== undefined ? rightChild : Number.MAX_VALUE) - current;
    if (diffLeft >= 0 && diffRight >= 0) {
      break;
    } else {
      const positionToSwap =
        diffLeft < diffRight
          ? getLeftChildPosition(position)
          : getRightChildPosition(position);
      swap(list, position, positionToSwap);
      position = positionToSwap;
    }
  }
}

function heapSort(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    heapify(list, i, list.length);
  }
  for (let i = list.length; i >= 1; i--) {
    swap(list, 0, i - 1);
    heapify(list, 0, i - 1);
  }
}

const list = [];
for (let i = 0; i < 20; i++) {
  list.push(Math.floor(Math.random() * 100));
}
heapSort(list);
console.log(list);
