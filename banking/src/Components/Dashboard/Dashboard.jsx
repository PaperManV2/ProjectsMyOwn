import Burger from '../Burger/Burger'
import css from './Dashboard.module.css'

const Dashboard = ({ openMenu }) => {
  return (
    <section className={css.wrapper}>
      <div className={css.menuBtn}>
        <Burger onClick={openMenu} />
      </div>
      <div className={css.balance_container}>
        <div className={css.amount_container}>
          <span className={css.amount}></span>
          <span className={css.currency}></span>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
