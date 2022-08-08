import classes from './MainNews.module.scss'
import MainNewsList from './MainNewsList/MainNewsList'
import { useEffect, useState } from 'react'
import { INews } from '../../models/INews'
import { http } from '../../utils/helpers/http'
import { Link } from 'react-router-dom'
import ButtonMore from '../UI/ButtonMore/ButtonMore'

import {clientRoutes} from '../../utils/constants/clienRoutes'

const {news: newsRoute} = clientRoutes

function MainNews() {
  const [news, setNews] = useState<INews[]>([])

  useEffect(() => {
    http.get('/get_news?page=1')
      .then((response) => setNews(response.data.news))
  }, [])

  return (
    <section className={classes.MainNews}>
      <h2 className={classes.Title}>Новости</h2>
      <p className={classes.SubTitle}>Будьте в курсе последних новостей</p>

      <MainNewsList newsList={news}/>
      <ButtonMore
        className={classes.ButtonMore}
      >
        <Link to={newsRoute}>
          Все новости
        </Link>

      </ButtonMore>
    </section>
  )
}

export default MainNews