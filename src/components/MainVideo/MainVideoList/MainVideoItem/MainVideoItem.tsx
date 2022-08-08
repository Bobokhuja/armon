import classes from './MainVideoItem.module.scss'
import { IVideo } from '../../../../models/IVideo'
import { HandySvg } from 'handy-svg'
import play from '../../../../assets/icons/youtube.svg'

function MainVideoItem({video}: {video: IVideo}) {
  return (
    <div className={classes.Item}>
      <div className={classes.ImgWrapper}>
        <img src={video.img} alt=""/>
        <button className={classes.Play}>
          <HandySvg
            src={play}
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  )
}

export default MainVideoItem