import classes from './MainVideo.module.scss'
import { useEffect, useState } from 'react'
import { http } from '../../utils/helpers/http'
import { IVideo } from '../../models/IVideo'
import MainVideoList from './MainVideoList/MainVideoList'

function MainVideo() {
  const [videos, setVideos] = useState<IVideo[]>([])

  useEffect(() => {
    http.get('/get_video?page=1')
      .then(response => setVideos(response.data.videogallery))
  }, [])

  return (
    <section className={classes.MainVideo}>
      <h2 className={classes.Title}>Медиа</h2>
      <p className={classes.SubTitle}>Наш ютуб</p>
      <MainVideoList videos={videos} />
    </section>
  )
}

export default MainVideo