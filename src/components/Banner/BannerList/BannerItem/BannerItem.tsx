import classes from './BannerItem.module.scss'
import { IBanner } from '../../../../models/IBanner'

function BannerItem({banner}: {banner: IBanner}) {
  return (
    <div className={`${classes.Item} ${classes[banner.color]}`}>
      <div className={classes.Img}>
        <img src={banner.svg} alt={banner.title}/>
      </div>
      <h3 className={classes.Title}>{banner.title}</h3>
      <p className={classes.Text} data-lite={banner.textLite}>{banner.text}</p>
    </div>
  )
}

export default BannerItem