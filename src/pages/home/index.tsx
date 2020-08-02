import React from 'react'
import styled from 'styled-components'
import { PageTitle } from '../../assets/text/home/index.json'

import {
  TopNavbar, NavItem, EntranceCard
} from './components/index'

export interface Props {

}

const HomePageWrapper = styled.div.attrs({
  className: `
    flex
    h-screen
    w-screen
  `
})`
`


const HomePage: React.FC<Props> = (props) => {

  return (

    <HomePageWrapper>

      <TopNavbar>

        <NavItem>
          { PageTitle }
        </NavItem>
        <NavItem>Enter</NavItem>
        <NavItem>Navigate</NavItem>

      </TopNavbar>

      <div>

      </div>

      </HomePageWrapper>

  )

}


export default HomePage