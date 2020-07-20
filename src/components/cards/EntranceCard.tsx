import React from 'react'
import styled from 'styled-components'

interface Props {

  imgUrl?: 'string'

  imgAlt?: 'string'
}

const EntranceCardWrapper = styled.div.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`

`

const EntranceCard: React.FC<Props> = (props) => {

  return (
    <EntranceCardWrapper>
      <img src={props.imgUrl} alt={props.imgAlt} />
    </EntranceCardWrapper>
  )
}

export default EntranceCard