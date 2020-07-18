import React from 'react'
import MetaTags from 'react-meta-tags'

import {TopNavbar, Button} from './components/index'


import './index.css'


export interface Props {
  /** The pages title  */
  title: string
}

const HomePage: React.FC<Props> = (props) => {

  return (

    <div id="home_page" className="page">

      <MetaTags>

        <title>
          { props.title }
        </title>

      </MetaTags>
      <TopNavbar>
        <Button type="button">Enter</Button>
      </TopNavbar>
      <div>
        
      </div>
      </div>

  )

}


export default HomePage