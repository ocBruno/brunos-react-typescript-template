import React from 'react'
import styled from 'styled-components'
import { PageTitle } from '../../assets/text/home/index.json'

import {
  TopNavbar, Button, EntranceCard
} from './components/index'

export interface Props {

}

const HomePageWrapper = styled.div.attrs({
  className: `flex`
})`
  background-color: rgb(224, 224, 240);
`


const HomePage: React.FC<Props> = (props) => {

  return (

    <HomePageWrapper>

      <TopNavbar>

        <Button type="button">{ PageTitle }</Button>
        <Button type="button">Enter</Button>
        <Button type="button">Navigate</Button>

      </TopNavbar>

      <div>

      </div>

      </HomePageWrapper>

  )

}


export default HomePage