import React from 'react'
import styled from 'styled-components'


interface Props {

}
const HeartWrapper = styled.div`
  cursor: pointer;
  background-color: rgb(255, 0, 76);
  height: 30px;
  transform: rotate(-45deg);
  width: 30px;

  &:before {
    content: "";
    transform: translateY(-18px);
    background-color: rgb(255, 0, 76);
    border-radius: 50%;
    height: 30px;
    position: absolute;
    width: 30px;
  }

  &:after {
    content: "";
    transform: translateX(18px);
    background-color: rgb(255, 0, 76);
    border-radius: 50%;
    height: 30px;
    position: absolute;
    width: 30px;
  }
`

const Heart: React.FC<Props> = (props) => {

  return <HeartWrapper></HeartWrapper>

}

export default Heart