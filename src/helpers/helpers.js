export function generateArea(areaSize) {

  return [...new Array(areaSize)].map(() =>  {
    let rowArr = [...new Array(areaSize)]

    return rowArr.map(() => '-')
  })
}

export function checkWinner(areaArray) {
  const obj = {}
  const areaSize = areaArray.length
  let isDraw = true

  for(let i = 0;i< areaSize; i++) {
    for(let j = 0; j< areaSize; j++) {
      if(!obj[`row${i}`]) obj[`row${i}`] = ''
      if(!obj[`col${i}`]) obj[`col${i}`] = ''
      obj[`row${i}`] += areaArray[i][j]
      obj[`col${i}`] += areaArray[j][i]

      if (i === j) {
        if (!obj.diagonal) obj.diagonal = '';
        obj.diagonal += areaArray[i][j];
      }
      if (i + j === areaSize - 1) {
        if (!obj.antidiagonal) obj.antidiagonal = '';
        obj.antidiagonal += areaArray[i][j];
      }

      if(isDraw && areaArray[i][j] === '-') {
        isDraw = false
      }
    }
  }

  for (const key in obj) {
    const winPattern = new RegExp(`([x0])\\1{${areaSize - 1}}`)
    if (winPattern.test(obj[key])) {

      return obj[key][0]
    }
  }

  if(isDraw) return '-'

  return null
}

