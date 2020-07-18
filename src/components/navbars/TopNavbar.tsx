import React from 'react'

interface Props {

}

const TopNavbar: React.FC<Props> = (props) => {

  return <div className="TopNavbar">
    { props.children }
  </div>

}

export default TopNavbar