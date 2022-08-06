import classes from './NavigationMobile.module.scss'
import { useState } from 'react'
import { IMenu } from '../../../models/IMenu'
import { clientRoutes } from '../../../utils/clienRoutes'
import MenuList from '../MenuList/MenuList'
import { HandySvg } from 'handy-svg'
import phoneIcon from '../../../assets/icons/phone.svg'
import Socials from '../../UI/Socials/Socials'

const {contacts, freeDome, sales, salesOffices, projects, career, news, about} = clientRoutes

function NavigationMobile() {
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

  return (
    <nav className={classes.Navigation}>
      <MenuList headerMode={true} mobile={true} menuList={menuList}/>
      <div className={classes.Icons}>
        <a
          href="tel:+992907229000"
          className={classes.PhoneLink}
          aria-label="Звонить на номер"
          data-phone="+992 98 722-90-00"
        >
          <HandySvg
            src={phoneIcon}
            width={32}
            height={32}
            className={classes.Icon}
          />
          +992 98 722-90-00
        </a>
      </div>
      <Socials />
    </nav>
  )
}

export default NavigationMobile