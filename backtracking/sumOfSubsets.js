function _getSubsets({
  givenSet,
  requiredSum,
  currentIndex = 0,
  currentSum = 0,
  includedIndices = [],
  sumOfRest,
  answers,
}) {
  if (
    currentIndex === givenSet.length ||
    sumOfRest < requiredSum - currentSum ||
    currentSum > requiredSum
  ) {
    return;
  }
  if (currentSum + givenSet[currentIndex] === requiredSum) {
    answers.push([...includedIndices, currentIndex]);
  } else {
    const newSumOfRest = sumOfRest - givenSet[currentIndex];
    // currentIndex included
    _getSubsets({
      givenSet,
      requiredSum,
      currentIndex: currentIndex + 1,
      currentSum: currentSum + givenSet[currentIndex],
      includedIndices: [...includedIndices, currentIndex],
      sumOfRest: newSumOfRest,
      answers,
    });
  }
  // currentIndex not included
  _getSubsets({
    givenSet,
    requiredSum,
    currentIndex: currentIndex + 1,
    currentSum,
    includedIndices,
    sumOfRest: sumOfRest - givenSet[currentIndex],
    answers,
  });
}

function getSubsets(set, sum) {
  const answers = [];
  _getSubsets({
    givenSet: set,
    requiredSum: sum,
    sumOfRest: set.reduce((accumulated, current) => accumulated + current, 0),
    answers,
  });
  return answers;
}
const array = [2, 3, 1, 4, 5, 7, 6, 4, 5, 4, 2, 4, 5, 7, 7, 64, 4, 6, 7, 3];
const sum = 13;
console.log(getSubsets(array, sum));
