import React, { useState } from 'react'
import styled from 'styled-components';

import cloud from '../../assets/svgs/cloud.svg'

interface Props {

}

const CloudsAnimationWrapper = styled.div`
  margin-top: 30px;
  margin-left: 30px;

`

const Clouds: React.FC<Props> = (props) => {


  return (
    <CloudsAnimationWrapper >
     <img src={cloud} alt="clouds" />
    </CloudsAnimationWrapper>
  )
}

export default Clouds