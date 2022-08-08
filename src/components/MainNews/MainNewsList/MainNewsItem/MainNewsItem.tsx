import classes from './MainNewsItem.module.scss'
import { INews } from '../../../../models/INews'
import NewsCard from '../../../NewsCard/NewsCard'
import { Link } from 'react-router-dom'

function MainNewsItem({news}: { news: INews }) {
  return (
    <div className={classes.Item}>
      <NewsCard
        dateType="standard"
        news={news}
        classNames={{
          card: classes.Card,
        }}
      />

    </div>
  )
}

export default MainNewsItem