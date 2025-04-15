import css from './NoPage.module.css'

const NoPage = () => {
  return (
    <section className={css.wrapper}>
      <h1 className={css.code}>404</h1>
      <span className={css.message}>No site with that url</span>
    </section>
  )
}

export default NoPage
