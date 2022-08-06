import classes from './MenuItem.module.scss'
import { IMenu } from '../../../../models/IMenu'
import { NavLink } from 'react-router-dom'
import MenuSubList from '../../MenuSubList/MenuSubList'
import { TouchEventHandler, useRef, useState } from 'react'
import clsSubList from '../../MenuSubList/MenuSubList.module.scss'

function MenuItem({menu, mobile = false}: { menu: IMenu, mobile: boolean }) {
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false)
  const subListRef = useRef<any>(null)
  const [link, setLink] = useState<string>(menu.href)

  const onLinkHandler: any = () => {
    if (menu.subMenu) {
      setIsShowSubMenu(true)
    }

  }

  const onTouchHandler: TouchEventHandler<HTMLAnchorElement> = event => {

    if (menu.subMenu) {
      if (isShowSubMenu) {
        setLink(menu.href)
      } else {
        setLink('#')
        setIsShowSubMenu(true)
      }
    }
  }

  const onPointerLeaveItem:any = (event: any) => {
    if (event.relatedTarget) {
      subListRef.current = event.relatedTarget
      if (subListRef.current.className !== clsSubList.List) {
        setIsShowSubMenu(false)
      }
    }
  }

  const onPointerLeaveList: any = () => setIsShowSubMenu(false)

  return (
    <li className={classes.Item}>
      <NavLink
        to={link}
        className={classes.Link}
        onPointerEnter={!mobile ? onLinkHandler : undefined}
        onPointerLeave={!mobile ? onPointerLeaveItem : undefined}
        onTouchStart={onTouchHandler}
      >
        {menu.text}
      </NavLink>
      {menu.subMenu && isShowSubMenu && (

        <MenuSubList
          onPointerLeave={onPointerLeaveList}
          menuList={menu.subMenu}
          isShowSubMenu={isShowSubMenu}
        />
      )}
    </li>
  )
}

export default MenuItem