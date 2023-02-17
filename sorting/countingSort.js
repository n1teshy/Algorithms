// Note: this method does not work for floats

function countingSort(list) {
  let max = list[0];
  let min = list[0];
  const repetitions = {};
  for (let num of list) {
    max = max >= num ? max : num;
    min = min <= num ? min : num;
    if (repetitions[num] === undefined) {
      repetitions[num] = 1;
    } else {
      repetitions[num]++;
    }
  }
  let elementIndex = 0;
  for (let i = min; i <= max; i++) {
    if (repetitions[i] !== undefined) {
      while (repetitions[i] !== 0) {
        list[elementIndex++] = i;
        repetitions[i]--;
      }
    }
  }
}
const list = [];
for (let i = 0; i < 10000; i++) {
  list.push(
    Math.floor(Math.random() * 100000) * (Math.random() < 0.5 ? -1 : 1)
  );
}
countingSort(list);
console.log(
  list.every(
    (_, index) =>
      list[index - 1] === undefined || list[index] >= list[index - 1]
  )
);
