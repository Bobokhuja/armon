import { ReactNode, useState } from 'react'
import { ModalRequestContext } from './ModalRequestContext'

interface IRequestState {
  children: ReactNode
}


function ModalRequestState({children}: IRequestState) {
  const [isShow, setIsShow] = useState<boolean>(false)


  const onModalShow = () => setIsShow(true)
  const onModalHide = () => setIsShow(false)


  return (
    <ModalRequestContext.Provider value={{
      isShow,
      onModalShow,
      onModalHide
    }}>
    {children}
    </ModalRequestContext.Provider>
  )
}

export default ModalRequestState