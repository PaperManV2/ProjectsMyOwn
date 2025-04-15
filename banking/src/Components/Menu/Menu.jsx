import css from './Menu.module.css'
import icons from '../../assets/icons.svg'

const Menu = ({ isOpen, openMenu }) => {
  return (
    <section className={`${css.wrapper} ${isOpen ? css.open : css.close}`}>
      <h2 className={css.menuTitle}>Menu</h2>
      <section className={css.navigation}>
        <div className={css.navigation_btn_main}>
          <div>
            <svg>
              <use href={`${icons}#dashboard`}></use>
            </svg>
            <span>Dashboard</span>
          </div>
          <div>
            <svg>
              <use href={`${icons}#file`}></use>
            </svg>
            <span>Sheets</span>
          </div>
          <div>
            <svg>
              <use href={`${icons}#chart`}></use>
            </svg>
            <span>Graphs</span>
          </div>
          <div>
            <svg>
              <use href={`${icons}#check`}></use>
            </svg>
            <span>Goals</span>
          </div>
          <div>
            <svg>
              <use href={`${icons}#euro`}></use>
            </svg>
            <span>Currency Calculator</span>
          </div>
          <div>
            <svg>
              <use href={`${icons}#database`}></use>
            </svg>
            <span>Analisys & Raports</span>
          </div>
        </div>
        <div className={css.navigation_btn_aside}>
          <div>
            <svg>
              <use href={`${icons}#cogwheel`}></use>
            </svg>
            <span>Settings</span>
          </div>
        </div>
      </section>
      <div className={css.menuCloseBtn} onClick={openMenu}></div>
    </section>
  )
}

export default Menu
