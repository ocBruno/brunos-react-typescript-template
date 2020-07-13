import React from 'react'
import './Button.css'


interface Props {
  // button label
  label: string
}

const Button: React.FC<Props> = (props) => {


  return (
    <button>
      { props.label }
    </button>
  )
}

export default Button