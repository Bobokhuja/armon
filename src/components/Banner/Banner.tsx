import classes from './Banner.module.scss'
import { useState } from 'react'
import { IBanner } from '../../models/IBanner'
import installmentIcon from '../../assets/icons/installment.svg'
import operatorIcon from '../../assets/icons/operator.svg'
import tradeIcon from '../../assets/icons/trade.svg'
import BannerList from './BannerList/BannerList'

function Banner() {
  const [banners] = useState<IBanner[]>([
    {title: 'Рассрочка', text: 'от застройщика', color: 'blue', svg: installmentIcon, textLite: 'от застройщика'},
    {
      title: 'Консультация',
      text: 'получите ответы на вопросы',
      color: 'orange',
      svg: operatorIcon,
      textLite: 'ответы на вопросы'
    },
    {title: 'Trade-in', text: 'на выгодных условиях', color: 'green', svg: tradeIcon, textLite: 'на выгодных условиях'},
  ])
  return (
    <section className={classes.Banner}>
      <h2 className={classes.Title}>Баннеры</h2>

      <BannerList bannerList={banners}/>
    </section>
  )
}

export default Banner