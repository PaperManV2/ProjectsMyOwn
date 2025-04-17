import Burger from '../Burger/Burger'
import css from './Dashboard.module.css'
import unitSigns from '../../assets/ideas/signMapping.json'
import textFit from '../../assets/ideas/textFit'
import { useEffect, useState, useRef } from 'react'

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

  useEffect(() => {
    setSimpleBalance(simplifyNumber(accountBalance))
    setBalance(accountBalance)
  }, [])

  useEffect(() => {
    textFit(balanceRef.current)
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
    </section>
  )
}

export default Dashboard
