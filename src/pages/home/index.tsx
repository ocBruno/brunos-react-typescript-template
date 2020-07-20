import React from 'react'
import styled from 'styled-components'

import {
  TopNavbar, Button, EntranceCard
} from './components/index'

export interface Props {
  /** The pages title  */
  title: string
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
        <Button type="button">Home</Button>
        <Button type="button">Enter</Button>
        <Button type="button">Navigate</Button>
      </TopNavbar>

      <div>

        {props.title}

      </div>

      </HomePageWrapper>

  )

}


export default HomePage