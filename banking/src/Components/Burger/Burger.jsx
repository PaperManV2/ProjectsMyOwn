import css from './Burger.module.css'

const Burger = ({ onClick }) => {
  return (
    <div className={css.burger} onClick={onClick}>
      <span className={css.burger_part}></span>
      <span className={css.burger_part}></span>
      <span className={css.burger_part}></span>
    </div>
  )
}

export default Burger
