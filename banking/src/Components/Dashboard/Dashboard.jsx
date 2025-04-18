import Burger from '../Burger/Burger'
import css from './Dashboard.module.css'
import unitSigns from '../../assets/data/signMapping.json'
import tmpSheets from '../../assets/data/tmpSheets.json'
import textFit from '../../assets/scripts/textFit'
import { useEffect, useState, useRef } from 'react'
import Decimal from 'decimal.js'

const Dashboard = ({ openMenu }) => {
  const accountBalance = 77777
  const [isBalanceSimple, setIsBalanceSimple] = useState(true)
  const [simpleBalance, setSimpleBalance] = useState(0)
  const [balance, setBalance] = useState(0)
  const balanceRef = useRef(null)

  function simplifyNumber(n) {
    n = Math.floor(n)
    const signs = unitSigns['pl'].units
    let a
    //a = length of number n
    a = String(n).length - 1
    //b = how many thausands
    const b = Math.floor(a / 3)
    const c = String(n).split('')
    let usedSign = ''
    let d = b
    if (!(b <= signs[0].value)) {
      usedSign = signs[0].suffix
      d = signs[0].value
    } else {
      usedSign = signs.find((el) => el.value === b).suffix
    }

    c.splice(a + 1 - d * 3, 0, '.')
    const z = Math.floor(Number(c.join('')) * 10) / 10
    const result = `${z}${usedSign}`
    return result
  }

  function handleToggleSimpleBalance() {
    setIsBalanceSimple((prev) => !prev)
  }

  function getSheetSum(sheet) {
    const entries = sheet.entries
    let sum = 0

    switch (sheet.type) {
      case 'row': {
        entries.forEach((entry) => {
          for (const [key, value] of Object.entries(entry)) {
            if (key === 'id' || key === 'date') continue
            // console.log(value)
            const a = new Decimal(String(value))
            const b = new Decimal(String(sum))
            sum = a.plus(String(b)).toString()
          }
        })

        break
      }
      case 'entry': {
        entries.forEach((entry) => {
          const value = entry.value
          const a = new Decimal(String(value))
          const b = new Decimal(String(sum))
          sum = a.plus(String(b)).toString()
        })

        break
      }
      default: {
        console.log('potato')
        break
      }
    }
    console.log(sum)
    return sum
  }

  useEffect(() => {
    setSimpleBalance(simplifyNumber(accountBalance))
    setBalance(accountBalance)
  }, [])

  useEffect(() => {
    textFit(balanceRef.current, 10)
  }, [isBalanceSimple])

  return (
    <section className={css.wrapper}>
      <div className={css.menuBtn}>
        <Burger onClick={openMenu} />
      </div>
      <div className={css.balance_container}>
        <div className={css.amount_container}>
          <span
            className={css.amount}
            onClick={handleToggleSimpleBalance}
            ref={balanceRef}
          >
            {isBalanceSimple ? simpleBalance : balance}
          </span>
        </div>
        <span className={css.currency}>PLN</span>
      </div>
      <ul className={css.sheetList}>
        {tmpSheets.map((s, i) => {
          return (
            <li key={i} className={css.sheet}>
              <div className={css.sheetTitle}>
                <h2 className={css.sheetName}>{Object.keys(s)[0]}:</h2>
                <span className={css.sheetValue}>
                  <pre>{getSheetSum(Object.values(s)[0])}</pre>
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Dashboard
