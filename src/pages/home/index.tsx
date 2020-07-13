import React from 'react'
import MetaTags from 'react-meta-tags'
import HomeEntranceAnimation from './components/animations/HomeEntranceAnimation'
import './index.css'

export interface Props {
  /** The user's name */
  title: string;
  /** Should the name be rendered in bold */
  priority?: boolean
}

const HomePage: React.FC<Props> = (props) => {

  return (

    <div id="home_page" className="page">

      <MetaTags>

        <title>
          { props.title }
        </title>

      </MetaTags>

      <HomeEntranceAnimation />

      </div>

  )

}


export default HomePage