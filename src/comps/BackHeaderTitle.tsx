import React from "react";
import styled from "styled-components";
import {BiArrowBack} from 'react-icons/bi'
import COLOR from "../variable/COLOR";
import {useHistory} from "react-router";

const BackHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 10px;
`

const Title = styled.h1<{ size: number }>`
margin: 0;
font-weight: 500;
font-size: ${({size}) => size}px;
`

export default ({title = '', size = 20}: { title?: string, size: number }) => {

    const {goBack} = useHistory()

    return <BackHeaderTitle>
        <BiArrowBack
            onClick={goBack}
            size={30} color={COLOR.DARKBLUE}/>
        <Title size={size}>{title}</Title>
        <div style={{width: 50}}/>
    </BackHeaderTitle>
}