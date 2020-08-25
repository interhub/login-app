import React, {useState} from "react";
import styled from "styled-components";
import BackHeaderTitle from "../../comps/BackHeaderTitle";
import ButtonNext from "../../comps/ButtonNext";
import COLOR from "../../variable/COLOR";
import {Link} from "react-router-dom";
import ROUTES from "../../variable/ROUTES";
import InputForm from "../../comps/InputForm";
import validator from 'validator';
import replaceToPhone from "../../func/replaceToPhone";
import formatPhone from "../../func/formatPhone";
import {connect, useDispatch} from "react-redux";
import {showTopMessage} from "../../store/actions";
import {useHistory} from 'react-router'
import {RouteParamsFromCodeScreen} from "../../types/types";

const LoginScreenContainer = styled.div``


const GrayText = styled.p`
color: #999;
font-size: 14px;
margin: 0;
`

const RegLink = styled.p<{ color: string }>`
color: ${({color}) => color};
font-size: 16px;
font-weight: 500;
margin-top: 5px;
transition: all 0.2s ease;
&:active{
text-decoration: underline;
}
`

const PaddingBox = styled.div`
padding: 20px;
`

const LoginScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [login, setLogin] = useState<string>('')
    const [err, setError] = useState<string>('')

    const checkValidate = (click?: boolean): boolean => {
        let firstErr;
        if (!(formatPhone(login) || validator.isEmail(login))) {
            firstErr = 'Поле «‎Номер телефона или Email заполнено неверно»'
            setError(firstErr)
            if (click) {
                dispatch(showTopMessage({message: {visible: true, isRed: true, text: firstErr}}))
                return false
            }
        }
        return true
    }

    const onInputLogin = (text: string) => {
        setLogin(replaceToPhone(text, login))
        setError('')
        dispatch(showTopMessage({message: {visible: false, text: '', isRed: true}}))
    }

    const blurInput = () => {
        if (login) {
            checkValidate()
        }
    }

    const next = () => {
        if(!checkValidate(true)){
            return
        }
        let params: RouteParamsFromCodeScreen = {login, registration: false}
        history.push({pathname: ROUTES.CODE, state: params})
    }

    return <LoginScreenContainer>
        <BackHeaderTitle size={20}/>
        <PaddingBox>
            {/*FORM LOGIN TEXT*/}
            <InputForm
                value={login}
                onBlur={blurInput}
                callback={onInputLogin}
                err={err}
                label={'Номер телефона или Email'}/>
            {/*LOGIN BTN*/}
            <div style={{margin: '50px 0'}}>
                <ButtonNext
                    onClick={next}
                    title={'Войти'}/>
            </div>
            <GrayText>
                Нет аккаунта?
            </GrayText>
            {/*NAVIGATE TO REG*/}
            <RegLink color={COLOR.DARKBLUE}>
                <Link
                    to={ROUTES.REG}>
                    Зарегистрируйтесь
                </Link>
            </RegLink>
        </PaddingBox>
    </LoginScreenContainer>
}

export default connect()(LoginScreen)