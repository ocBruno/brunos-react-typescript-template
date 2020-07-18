import React, { useState } from 'react'
import styled from 'styled-components';

import Heart from 'components/graphics/Heart'

interface Props {

}

const HeartAnimationWrapper = styled.div`
  margin-top: 30px;
  margin-left: 30px;

  .animate__pulse > div, .animate__pulse > div:before, .animate__pulse > div:after {
    background-color: rgb(255, 179, 210);

    transition: background-color 600ms ease-in-out;
  }
`

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
    <HeartAnimationWrapper className={`animate__animated animate__${activeAnimationClass}`}>
      <Heart />
    </HeartAnimationWrapper>
  )
}

export default HeartAnimation