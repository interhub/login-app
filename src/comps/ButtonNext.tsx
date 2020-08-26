import React from "react";
import styled from "styled-components";
import COLOR from "../variable/COLOR";

const ButtonNext = styled.div<{ disabled: boolean }>`
 background-color: ${({disabled}) => disabled ? COLOR.DISABLED : COLOR.DARKBLUE};
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

export default ({title = 'OK', onClick, disabled = false}: { title?: string, onClick: () => void, disabled?: boolean }) => {

    return <ButtonNext disabled={disabled} onClick={() => {
        if (!disabled)
            onClick()
    }}>
        <ButtonTitle>{title}</ButtonTitle>
    </ButtonNext>
}