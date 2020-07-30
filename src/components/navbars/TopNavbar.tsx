import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {

}

const TopNavbarWrapper = styled.div.attrs({
  className: "flex w-screen justify-start bg-gray-100 h-12",
})`

`

const TopNavbar: React.FC<Props> = (props) => {

  return <TopNavbarWrapper>
    { props.children }
  </TopNavbarWrapper>

}


export default TopNavbar