import classes from './MenuSubList.module.scss'
import { IMenu } from '../../../models/IMenu'
import MenuSubItem from './MenuSubItem/MenuSubItem'
import { CSSTransition } from 'react-transition-group'

interface IMenuSubList {
  menuList: IMenu[]
  onPointerLeave: any
  isShowSubMenu: boolean
}

function MenuSubList({menuList, onPointerLeave, isShowSubMenu}: IMenuSubList) {

  return (
    // <CSSTransition
    //   in={isShowSubMenu}
    //   timeout={500}
    //   unmountOnExit
    //   mountOnEnter
    //   classNames={{
    //     enterActive: classes.SubEnterActive,
    //     exitActive: classes.SubExitActive,
    //   }}
    // >
      <ul
        className={classes.List}
        onPointerLeave={onPointerLeave}
      >
        {menuList.map(menu => (
          <MenuSubItem key={menu.href} menu={menu}/>
        ))}
      </ul>
    // </CSSTransition>
  )
}

export default MenuSubList