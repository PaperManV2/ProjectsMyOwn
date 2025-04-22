import Decimal from 'decimal.js'

export default function getSheetSum(sheet) {
  let sum = 0
  let entries = sheet[1]['entries']
  entries.forEach((entry) => {
    const value = entry.value
    const a = new Decimal(String(value))
    const b = new Decimal(String(sum))
    sum = a.plus(String(b)).toString()
  })

  console.log(sum)
  return sum
}
