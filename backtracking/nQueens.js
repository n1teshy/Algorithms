// TODO: determine if pssing 'currentColumn' would improve efficiency

// TODO: every combination has a mirror combination that would be correct, 
// find a way so that the algorithm doesn't call the function to calculate the mirror solutions

function isQueenThreatened(spots, end) {
  let isThreatened = false;
  main: for (let i = 0; i < end; i++) {
    for (let j = 0; j < end; j++) {
      if (i !== j) {
        isThreatened =
          Math.abs(i - j) === 1
            ? Math.abs(spots[i] - spots[j]) <= 1
            : spots[i] === spots[j];
        if (isThreatened) {
          break main;
        }
      }
    }
  }
  return isThreatened;
}

function _nQueens(size, currentRow, takenSpots, results) {
  if (currentRow === size) {
    results.push(takenSpots);
  } else {
    for (let i = 0; i < size; i++) {
      takenSpots[currentRow] = i;
      if (!isQueenThreatened(takenSpots, currentRow + 1)) {
        _nQueens(size, currentRow + 1, [...takenSpots], results);
      }
    }
  }
}

function nQueens(size) {
  const results = [];
  const takenSpots = new Array(size).fill(null);
  _nQueens(size, 0, takenSpots, results);
  return results;
}

console.log(nQueens(4).length);