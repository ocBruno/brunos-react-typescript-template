import React from 'react'
import styled from 'styled-components'
import {
  Clouds,
  PortfolioPersonCard
} from './components/index'

const BrunosPortraitImgSrc  = require('../../assets/images/bruno-portrait.png')

interface Props {

}

const BrunosPortfolio: React.FC<Props> = (props: Props) => {

  return (
    <>
      <PortfolioPersonCard imgSrc={ BrunosPortraitImgSrc }/>
      <Clouds/>
    </>
  )
}
export default BrunosPortfolio