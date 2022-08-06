import classes from './MenuSubItem.module.scss'
import { IMenu } from '../../../../models/IMenu'
import { NavLink } from 'react-router-dom'

function MenuSubItem({menu}: {menu: IMenu}) {
  return (
    <li className={classes.Item}>
      <NavLink
        className={classes.Link}
        to={menu.href}
      >
        {menu.text}
      </NavLink>
    </li>
  )
}

export default MenuSubItem