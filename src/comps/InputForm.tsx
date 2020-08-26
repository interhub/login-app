import React, {useEffect, useState} from "react";
import styled from "styled-components";
import COLOR from "../variable/COLOR";
import {onInputType} from "../types/types";

interface IErr {
    err: string
    empty?: boolean
}

const InputContainer = styled.div<IErr>`
border-bottom:  ${({empty}) => empty ? 1 : 2}px solid ${({err}) => err.length > 0 ? COLOR.ERR : COLOR.GRAY};
`

const InputForm = styled.input`
outline: none;
border: none;
font-size: 18px;
width: 100%;
margin-bottom: 12px;
font-weight: 500;
`

const Label = styled.p<IErr>`
color: ${({err}) => err.length > 0 ? COLOR.ERR : COLOR.GRAY};
font-size: ${({empty}) => empty ? 18 : 14}px; 
position: relative;
top: ${({empty}) => empty ? 42 : 0}px; 
transition: all 0.2s ease;
pointer-events: none;
`

export default ({
                    label = '', err = '', callback, onBlur = () => {
    }, value
                }: { label?: string, err: string, callback: (text: string) => void, onBlur: () => void, value: string }) => {

    const [empty, setEmpty] = useState<boolean>(true);

    useEffect(() => {
        if (value !== '') {
            setEmpty(false)
        }
    })

    return <div>
        <InputContainer empty={empty} err={err}>
            <Label empty={empty} err={err}>
                {label}
            </Label>

            <InputForm
                value={value}
                onChange={() => {
                }}
                onBlur={onBlur}
                onInput={(e: onInputType) => {
                    let val = e.target.value
                    callback(val)
                    setEmpty(val === '')
                }}
                autoFocus={true}/>
        </InputContainer>
        <Label err={err}>
            {err}
        </Label>
    </div>
}