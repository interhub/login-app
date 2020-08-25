import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router";
import COLOR from "../variable/COLOR";

const ButtonNext = styled.div<{ color: string }>`
 background-color: ${({color}) => color};
 color:#fff;
 min-height: 60px;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: all 0.2s ease;
 cursor: pointer;
 &:active{
 background-color: #fff;
 color: ${({color}) => color};
 outline: 1px solid ${({color}) => color};
 };
 
`

const ButtonTitle = styled.p`
text-align: center;
font-size: 16px;
`

export default ({title = 'OK', color = COLOR.DARKBLUE, onClick}: { title?: string, color?: string, onClick: () => void }) => {

    const {goBack} = useHistory()

    return <ButtonNext onClick={onClick} color={color}>
        <ButtonTitle>{title}</ButtonTitle>
    </ButtonNext>
}