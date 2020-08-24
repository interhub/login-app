import React, {useState} from "react";
import styled from "styled-components";
import TopBannerMessage from "../../comps/TopBannerMessage";
import BackHeaderTitle from "../../comps/BackHeaderTitle";
import InputForm from "../../comps/InputForm";
import ButtonNext from "../../comps/ButtonNext";
import COLOR from "../../variable/COLOR";
import {Link} from "react-router-dom";
import ROUTES from "../../variable/ROUTES";

const RegScreenContainer = styled.div``

const PaddingBox = styled.div`
padding: 20px;
`

const LabelUnderline = styled.p`
color:#999;
font-size: 14px;

`

const RegScreen = () => {


    const [login, setLogin] = useState<string>('')
    const [err, setError] = useState<string>('')
    const [isClickError, setIsClickError] = useState<boolean>(false)

    const checkValidate = () => {
        setIsClickError(!isClickError)
    }

    const onInputLogin = (text: string) => {
        setLogin(text)
        setError('')
        setIsClickError(false)
    }

    return <RegScreenContainer>
        <TopBannerMessage  isClickError={isClickError} setIsClickError={setIsClickError} title={err}/>
        <BackHeaderTitle title={'Регистрация в Utair'} size={24}/>

        <PaddingBox>
            {/*FORM LOGIN TEXT*/}
            <InputForm
                callback={onInputLogin}
                err={err}
                label={'Номер телефона'}/>
            <LabelUnderline>
                Укажите ваш номер телефона. Он будет использоваться для входа в приложение
            </LabelUnderline>
            {/*LOGIN BTN*/}
            <ButtonNext
                onClick={() => {
                    checkValidate()
                }}
                title={'Продолжить'}/>
        </PaddingBox>
    </RegScreenContainer>
}

export default RegScreen