import classes from './Card.module.scss'
import { ReactNode } from 'react'

export interface ICard {
  img?: string
  children: ReactNode
  classNames?: {
    card?: string
    img?: string
    info?: string
  }
}

function Card({img, children, classNames}: ICard) {
  return (
    <div className={`${classes.Card} ${classNames?.card ? classNames.card : ''}`}>
      <div className={`${classes.ImgWrapper} ${classNames?.img ? classNames.img : ''}`}>
        <img className={classes.Img} src={img} alt=""/>
      </div>
      <div className={`${classes.Info} ${classNames?.info ? classNames.info : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Card