import classes from './SocialItem.module.scss'
import { ISocial } from '../../../../models/ISocial'
import { HandySvg } from 'handy-svg'

function SocialItem({social, svg}: {social: ISocial, svg: string}) {
  return (
    <li
      className={classes.Item}
    >
      <a
        href={social.href}
        className={classes.Link}
        aria-label={social.name}
      >
        <HandySvg
          className={classes.Svg}
          width={36}
          height={36}
          src={svg}
        />
      </a>
    </li>
  )
}

export default SocialItem