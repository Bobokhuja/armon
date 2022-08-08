import classes from './NewsCard.module.scss'
import { INews } from '../../models/INews'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

interface INewsCard {
  dateType: 'standard' | 'locale'
  news: INews
  classNames?: {
    card?: string
    title?: string
    text?: string
    date?: string
  }
}

function NewsCard({dateType, news, classNames}: INewsCard) {

  let date = new Date(news.data).toLocaleDateString('ru-RU')
  if (dateType === 'locale')
    date = new Date('Fri, 26 Mar 2021 11:22:47 GMT')
      .toLocaleDateString('ru-Ru', {day: 'numeric', month: 'long', year: 'numeric'})

  return (
    <Link
      to={`/news/${news.id}`}
      className={classes.Link}
    >
      <div className={`${classes.NewsCard} ${classNames?.card ? classNames.card : ''}`}>
        <p className={`${classes.Title} ${classNames?.title ? classNames.title : ''}`}>{news.title}</p>
        <div className={`${classes.Text} ${classNames?.text ? classNames.text : ''}`}>
          {parse(news.text.substring(0, 50))}...
        </div>
        <time
          dateTime={new Date(news.data).getTime().toString()}
          className={`${classes.Date} ${classNames?.date ? classNames.date : ''}`}
        >
          {date}
        </time>
      </div>
    </Link>
  )
}

export default NewsCard