import classes from './CloseButton.module.scss'
import closeIcon from '../../../assets/icons/close.svg'
import { HandySvg } from 'handy-svg'

interface ICloseButton {
  className?: string
  onClick: () => void
  onKeyDown?: () => void
}

function CloseButton({className, onKeyDown, onClick}: ICloseButton) {
  const cls = [
    classes.Button,
    className ? className : ''
  ]
  return (
    <button
      type="button"
      className={cls.join(' ')}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <HandySvg
        src={closeIcon}
        width={40}
        height={40}
        className={classes.Svg}
      />
    </button>
  )
}

export default CloseButton