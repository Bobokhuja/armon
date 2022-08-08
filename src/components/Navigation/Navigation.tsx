import classes from './Navigation.module.scss'
import MenuList from './MenuList/MenuList'
import { useContext, useState } from 'react'
import { IMenu } from '../../models/IMenu'
import { clientRoutes } from '../../utils/constants/clienRoutes'
import { HandySvg } from 'handy-svg'
import phoneIcon from '../../assets/icons/phone.svg'
import bidIcon from '../../assets/icons/bid.svg'
import { ModalRequestContext } from '../modals/ModalRequest/context/ModalRequestContext'

const {contacts, freeDome, sales, salesOffices, projects, career, news, about} = clientRoutes

function Navigation() {
  const [menuList] = useState<IMenu[]>([
    {
      href: about, text: 'О нас', subMenu: [
        {href: about, text: 'О компании'},
        {href: news, text: 'Новости'},
        {href: career, text: 'Карьера'},
      ]
    },
    {
      href: projects, text: 'Наши проекты', subMenu: [
        {href: 'https://arc.tj/project/ispechak-residence', text: 'Ispechak Residence'},
        {href: freeDome, text: 'Freedome Residence'},
      ]
    },
    {href: sales, text: 'В продаже'},
    {href: salesOffices, text: 'Офисы продаж'},
    {href: contacts, text: 'Контакты'},
  ])
  const requestModal = useContext(ModalRequestContext)

  return (
    <nav className={classes.Navigation}>
      <MenuList headerMode={true} menuList={menuList}/>
      <div className={classes.Icons}>
        <a
          href="tel:+992907229000"
          className={classes.Icon}
          aria-label="Звонить на номер"
          data-phone="+992 98 722-90-00"
        >
          <HandySvg
            src={phoneIcon}
            width={32}
            height={32}
            className={classes.Svg}
          />
        </a>
        <button
          type="button"
          className={classes.Icon}
          aria-label="Оставить заявку"
          onClick={requestModal?.onModalShow}
        >
          <HandySvg
            src={bidIcon}
            width={32}
            height={32}
            className={classes.Svg}
          />
        </button>
      </div>
    </nav>
  )
}

export default Navigation