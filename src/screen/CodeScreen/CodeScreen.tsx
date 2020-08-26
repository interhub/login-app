import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import BackHeaderTitle from "../../comps/BackHeaderTitle";
import {connect, useDispatch} from "react-redux";
import {AllState, LoadingType, onInputType, RouteParamsFromCodeScreen} from "../../types/types";
import {Location} from 'history';
import formatPhone from "../../func/formatPhone";
import LoaderAnimate from "../../comps/LoaderAnimate";
import ROUTES from "../../variable/ROUTES";
import {useHistory} from "react-router";
import {LOADING_STATE_NAME} from "../../variable/LOADING_STATE";
import {codeVerifyAction, setLoadingAction} from "../../store/actions";

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
margin-bottom: 20px;
`

const CodeItem = styled.div<{ isEmpty: boolean, isFocus: boolean }>`
display: flex;
justify-content: center;
align-items: center;
flex:1;
font-size: 20px;
border-bottom: ${({isEmpty, isFocus}) => !isEmpty ? (isFocus ? '3px' : '2px') + ' solid lightgray' : '2px solid darkblue'} ;
margin: 5px;
max-width: 30px;
height: 40px;
font-weight: 600;
`


const CodeScreen: React.FC<any> = ({location, loading}: { location: Location<RouteParamsFromCodeScreen>, loading: LoadingType }) => {
    const histoty = useHistory()
    const dispatch = useDispatch()

    const [code, setCode] = useState<string>('');
    const registration = location?.state?.registration || false;
    const login = location?.state?.login;

    const isPhone = !!formatPhone(login)
    const titleText = isPhone ?
        <p>{`Введите код из SMS, отправленный на номер`} <br/> {login}</p> :
        <p>{`Введите код из письма, отправленный на почту`} <br/> {login}</p>

    const inputRef: React.RefObject<HTMLInputElement> = useRef(null)

    //TODO REDIRECT
    // useEffect(() => {
    //     if (loading.success) {
    //         setTimeout(() => {
    //             if (registration) {
    //                 histoty.push({pathname: ROUTES.LOGIN, state: {}})
    //             } else {
    //                 histoty.push({pathname: ROUTES.PROFILE, state: {}})
    //             }
    //         }, 1500)
    //     }
    // }, [loading])

    useEffect(() => {
        if (code.length === 4) {
            dispatch(codeVerifyAction(code, login))
            dispatch(setLoadingAction(LOADING_STATE_NAME.SUCCESS))
        }
    }, [code])

    useEffect(() => {
        if (!login) {
            histoty.push(ROUTES.START)
        }
        return () => {
            hideLoader()
        }
    }, [])

    const hideLoader = () => dispatch(setLoadingAction(LOADING_STATE_NAME.HIDE))


    return <CodeScreenContainer>
        <input autoFocus onInput={(e: onInputType) => {
            hideLoader()
            setCode(e.target.value)
        }} ref={inputRef} style={{opacity: 0, position: 'fixed', top: -20}} maxLength={4} type="phone"/>
        <BackHeaderTitle title={'Подтверждение'} size={25}/>
        <PaddingBox>
            <TitleText>{titleText}</TitleText>
            {!(loading.process || loading.success) && <CodeBox
                onClick={() => {
                    inputRef?.current?.focus()
                }}>
                {Array(4).fill(1).map((el, key: number) => {
                    let val = code[key];
                    let isFocus = code.length === key;
                    return <CodeItem isFocus={isFocus} key={key} isEmpty={!!val}>
                        {val || ''}
                    </CodeItem>
                })}
            </CodeBox>}
            <LoaderAnimate/>
        </PaddingBox>
    </CodeScreenContainer>
}

const mapStateToProps = (state: AllState) => ({...state.router, ...state.saga})

export default connect(mapStateToProps)(CodeScreen)