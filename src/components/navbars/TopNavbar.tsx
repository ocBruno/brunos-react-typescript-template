import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {

}

const TopNavbarWrapper = styled.ul.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  ${tw`flex`}

  li {
    ${tw`flex-col`}
  }
`

const TopNavbar: React.FC<Props> = (props) => {

  return <TopNavbarWrapper>
    { props.children }
  </TopNavbarWrapper>

}


export default TopNavbar