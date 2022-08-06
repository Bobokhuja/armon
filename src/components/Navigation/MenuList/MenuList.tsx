import classes from './MenuList.module.scss'
import { IMenu } from '../../../models/IMenu'
import MenuItem from './MenuItem/MenuItem'

interface IMenuList {
  menuList: IMenu[]
  headerMode?: boolean
  mobile?: boolean
}

function MenuList({menuList, headerMode = true, mobile = false}: IMenuList) {
  const cls = [
    classes.List,
    headerMode ? classes.HeaderMode : ''
  ]
  return (
    <ul className={cls.join(' ')}>
      {menuList.map(menu =>
        <MenuItem
          mobile={mobile}
          key={menu.href}
          menu={menu}
        />
      )}
    </ul>
  )
}

export default MenuList