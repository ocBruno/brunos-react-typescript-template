import React, { useState } from 'react'
import './HeartAnimation.css'

import Heart from 'components/graphics/Heart'

interface Props {

}

const HeartAnimation: React.FC<Props> = (props) => {

  const [activeAnimationClass, setActiveAnimationClass] = useState(``)

  switch (activeAnimationClass) {
    case ``:
      setTimeout(() => {
        setActiveAnimationClass('heartBeat')
      }, 900)
      break
    
    case `heartBeat`:
      setTimeout(() => {
        setActiveAnimationClass(``)
      }, 1200)
      break

  }


  return (
    <section id="heart_animation" className={`animate__animated animate__${activeAnimationClass}`}>
      <Heart />
    </section>
  )
}

export default HeartAnimation