import classes from './MainProjects.module.scss'
import useRequest from '../../hooks/useRequest'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import { IProject } from '../../models/IProject'
import { http } from '../../utils/helpers/http'
import MainProjectList from './MainProjectList/MainProjectList'

function MainProjects() {
  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {

    http.get('/get_project?page=1')
      .then(response => setProjects(response.data.projects.slice(0, 2)))
  }, [])

  return (
    <section className={classes.Projects}>
      <h2 className={classes.Title}>наши проекты</h2>
      <p className={classes.Subtitle}>Узнайте подробнее о наших проектах</p>

      <MainProjectList projectList={projects} />
    </section>
  )
}

export default MainProjects