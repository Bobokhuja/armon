import classes from './Socials.module.scss'
import { useState } from 'react'
import { ISocial } from '../../../models/ISocial'
import SocialItem from './SocialItem/SocialItem'
import facebook from '../../../assets/icons/socials/facebook.svg'
import instagram from '../../../assets/icons/socials/instagram.svg'
import telegram from '../../../assets/icons/socials/telegram.svg'
import whatsapp from '../../../assets/icons/socials/whatsapp.svg'
import youtube from '../../../assets/icons/socials/youtube.svg'

const svgSocials: any = {
  facebook,
  instagram,
  telegram,
  whatsapp,
  youtube
}

function Socials() {
  const [socials] = useState<ISocial[]>([
    {name: 'facebook', href: 'https://facebook.com/'},
    {name: 'instagram', href: 'https://instagram.com/'},
    {name: 'whatsapp', href: 'https://wa.me/'},
    {name: 'telegram', href: 'https://t.me/'},
    {name: 'youtube', href: 'https://youtube.com/'},
  ])
  return (
    <ul className={classes.List}>
      {socials.map(social =>
        <SocialItem
          key={social.name}
          social={social}
          svg={svgSocials[social.name]}
        />
      )}
    </ul>
  )
}

export default Socials