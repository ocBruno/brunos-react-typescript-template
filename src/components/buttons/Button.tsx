import React from 'react'

interface Props {
  // button label
    
  type?: 'submit' | 'reset' | 'button'
}

const Button: React.FC<Props> = (props) => {

  return (
    <button type={props.type}>
      { props.children }
    </button>
  )
}

export default Button