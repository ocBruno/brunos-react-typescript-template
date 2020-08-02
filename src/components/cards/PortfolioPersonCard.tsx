import React from 'react'
import styled from 'styled-components'

interface Props {

  imgSrc?: 'string'

  imgAlt?: 'string'
}

const PortfolioPersonCardWrapper = styled.div.attrs({
  className: `
    flex
    flex-col
    h-screen
    justify-center
    items-center
    bg-gray-100
    rounded
  `
})`

`

const PersonPortrait = styled.img.attrs({
  className: `
    rounded
    shadow-300
    w-20
    h-20
  `
})`

`

const PortfolioPersonCard: React.FC<Props> = (props) => {
  return (
    <PortfolioPersonCardWrapper>
      <PersonPortrait src={props.imgSrc} alt={props.imgAlt} />
    </PortfolioPersonCardWrapper>
  )
}

export default PortfolioPersonCard