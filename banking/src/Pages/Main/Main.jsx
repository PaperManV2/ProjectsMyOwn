import css from './Main.module.css'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Menu from '../../Components/Menu/Menu'
import React, { useState } from 'react'

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <section className={css.wrapper}>
      <Menu isOpen={isMenuOpen} openMenu={handleToggleMenu}></Menu>
      <Dashboard openMenu={handleToggleMenu}></Dashboard>
    </section>
  )
}

export default Main
