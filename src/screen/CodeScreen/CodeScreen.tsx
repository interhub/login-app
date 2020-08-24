import React, {useRef, useState} from "react";
import styled from "styled-components";
import BackHeaderTitle from "../../comps/BackHeaderTitle";
import {connect} from "react-redux";
import {AllState, onInputType} from "../../types/types";
import {Location} from 'history';
import formatPhone from "../../func/formatPhone";
import LoaderAnimate from "../../comps/LoaderAnimate";

const CodeScreenContainer = styled.div``


const PaddingBox = styled.div`
padding: 20px;
`

const TitleText = styled.div`
padding: 20px;
color: #8090A6;
font-size: 20px;
text-align: center;
`

const CodeBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`

const CodeItem = styled.div<{ isEmpty: boolean }>`
display: flex;
justify-content: center;
align-items: center;
flex:1;
font-size: 20px;
border-bottom: ${({isEmpty}) => !isEmpty ? '2px solid lightgray' : '2px solid darkblue'} ;
margin: 5px;
max-width: 30px;
height: 40px;
font-weight: 600;
`


const CodeScreen = ({location}: { location: Location<any & { login: string }> }) => {

    const [code, setCode] = useState<string>('');

    const login = location?.state?.login;
    const isPhone = !!formatPhone(login || '')
    const titleText = isPhone ?
        <p>{`Введите код из SMS, отправленный на номер`} <br/> {login}</p> :
        <p>{`Введите код из письма, отправленный на почту`} <br/> {login}</p>

    const inputRef: any = useRef(null)

    return <CodeScreenContainer>
        <input onInput={(e: onInputType) => {
            setCode(e.target.value)
        }} ref={inputRef} style={{opacity: 0, position: 'fixed', top: -20}} maxLength={4} type="phone"/>
        <BackHeaderTitle title={'Подтверждение'} size={25}/>
        <PaddingBox>
            <TitleText>{titleText}</TitleText>
            <CodeBox
                onClick={() => {
                    inputRef?.current?.focus()
                }}
            >
                {Array(4).fill(1).map((el, key: number) => {
                    let val = code[key];
                    return <CodeItem isEmpty={!!val}>
                        {val || ''}
                    </CodeItem>
                })}
            </CodeBox>
            <LoaderAnimate/>
        </PaddingBox>
    </CodeScreenContainer>
}

const mapStateToProps = (state: AllState) => ({...state.router, ...state.saga})

export default connect(mapStateToProps)(CodeScreen)