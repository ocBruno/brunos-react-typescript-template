import React from 'react'

import {
  TopNavbar, Button
} from './components/index'


import './index.css'


export interface Props {
  /** The pages title  */
  title: string
}

const HomePage: React.FC<Props> = (props) => {

  return (

    <div id="home_page" className="page">

      <TopNavbar>
        <Button type="button">Home</Button>
        <Button type="button">Enter</Button>
        <Button type="button">Navigate</Button>
      </TopNavbar>

      <div>

        {props.title}

      </div>

      </div>

  )

}


export default HomePage