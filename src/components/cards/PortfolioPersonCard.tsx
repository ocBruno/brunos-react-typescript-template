import React from 'react'
import styled from 'styled-components'

interface Props {

  imgSrc?: 'string'

  imgAlt?: 'string'
}

const PortfolioPersonCardWrapper = styled.div.attrs({
  className: `
    inline-flex
    flex-col
    justify-center
    items-center
    bg-gray-100
    rounded-lg
    w-60
    h-60
    p-10
    shadow-xl
    bg-blue-100
  `
})`

`

const PersonPortrait = styled.img.attrs({
  className: `
    rounded-full
    shadow-md
    w-40
    h-40
  `
})`

`
const Name = styled.div.attrs({
  className: `
    prose
  `
})``

const PortfolioPersonCard: React.FC<Props> = (props) => {
  return (
    <PortfolioPersonCardWrapper>
      <Name>Bruno</Name>
      <PersonPortrait src={props.imgSrc} alt={props.imgAlt} />

    </PortfolioPersonCardWrapper>
  )
}

export default PortfolioPersonCard