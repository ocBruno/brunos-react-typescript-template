import React from 'react'
import './TopNavbar.css'

interface Props {

}

const TopNavbar: React.FC<Props> = (props) => {

  return <div className="TopNavbar">
    { props.children }
  </div>

}

export default TopNavbar