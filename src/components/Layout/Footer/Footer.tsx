import classes from './Footer.module.scss'
import Logo from '../../Logo/Logo'
import Socials from '../../UI/Socials/Socials'
import logoBobo from '../../../assets/img/developed bobo.svg'

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Wrap}>
        <div className={classes.Top}>
          <div className={classes.Logo}>
            <Logo footerMode={true}/>
          </div>
          <p className={classes.Address}>
          <span>
              г. Душанбе,<br/>
              ул. Н. Махсум 156
          </span>
            <a href="https://yandex.ru/maps/10318/dushanbe/geo/1926089001/?ll=68.730417%2C38.582082&z=14.63">показать на
              карте</a>
          </p>
          <p className={classes.Contacts}>
            <a className={classes.Phone} href="tel:+992987229000">+992 98-722-90-00</a>
            <a className={classes.Email} href="mailto:info@armon.tj">info@armon.tj</a>
          </p>
          <div className={classes.Socials}>
            <p className={classes.SocialTitle}>Связаться с нами:</p>
            <Socials/>
          </div>
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.Wrap}>
          <p className={classes.Copyright}>&copy; All rights reserved by Armon Development</p>
          <a href="https://bobo.tj" className={classes.Developer}>
            <img src={logoBobo} alt="DEVELOPED BY BO/BO"/>
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer