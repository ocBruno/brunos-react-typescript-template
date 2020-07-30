import React from 'react'
import styled from 'styled-components'

interface Props {
  // button label
    
  type?: 'submit' | 'reset' | 'button'
}
const NavItemWrapper = styled.button.attrs({
  className: `
    inline-flex
    justify-center
    items-center
    mr-3
    text-pink-400
    border-solid
    border-2
    border-pink-400
    hover:text-gray-100
    hover:bg-pink-500
    px-2
    rounded
    transition-colors
  `
})`

`
const NavItem: React.FC<Props> = (props) => {

  return (
    <NavItemWrapper type={props.type}>
      { props.children }
    </NavItemWrapper>
  )
}

export default NavItem