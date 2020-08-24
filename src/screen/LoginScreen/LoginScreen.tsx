import React, {useState} from "react";
import styled from "styled-components";
import BackHeaderTitle from "../../comps/BackHeaderTitle";
import ButtonNext from "../../comps/ButtonNext";
import COLOR from "../../variable/COLOR";
import {Link} from "react-router-dom";
import ROUTES from "../../variable/ROUTES";
import InputForm from "../../comps/InputForm";
import TopBannerMessage from "../../comps/TopBannerMessage";
import validator from 'validator';
import replaceToPhone from "../../func/replaceToPhone";
import formatPhone from "../../func/formatPhone";

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

    const [login, setLogin] = useState<string>('')
    const [err, setError] = useState<string>('')
    const [isClickError, setIsClickError] = useState<boolean>(false)

    const checkValidate = (click?: boolean) => {
        let firstErr;
        if (!(formatPhone(login) || validator.isEmail(login))) {
            firstErr = 'Поле «‎Номер телефона или Email заполнено неверно»'
            setError(firstErr)
            if (click) {
                setIsClickError(true)
                return false
            }
        }
    }

    const onInputLogin = (text: string) => {
        setLogin(replaceToPhone(text, login))
        setError('')
        setIsClickError(false)
    }

    const blurInput = () => {
        if (login) {
            checkValidate()
        }
    }

    return <LoginScreenContainer>
        <TopBannerMessage setIsClickError={setIsClickError} isClickError={isClickError} title={err}/>
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
                    onClick={() => {
                        checkValidate(true)
                    }}
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

export default LoginScreen