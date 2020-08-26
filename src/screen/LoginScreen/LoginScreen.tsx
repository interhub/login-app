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
import {logInAction, setLoadingAction, showTopMessage} from "../../store/actions";
import {useHistory} from 'react-router'
import {AllState, LoadingType, RouteParamsFromCodeScreen} from "../../types/types";
import LoaderAnimate from "../../comps/LoaderAnimate";
import {LOADING_STATE_NAME} from "../../variable/LOADING_STATE";

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

const LoaderBox = styled.div`
margin: 50px 0;
`
const LoadetText = styled.p`
color:#999;
font-size: 14px;
margin-bottom: 20px;
text-align: center;
`


const LoginScreen = ({loading}: { loading: LoadingType }) => {
    const disabled = loading.visible

    const dispatch = useDispatch()

    const history = useHistory()

    const [login, setLogin] = useState<string>('')
    const [err, setError] = useState<string>('')

    const hideLoading = () => dispatch(setLoadingAction(LOADING_STATE_NAME.HIDE))

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
        hideLoading()
        dispatch(showTopMessage({message: {visible: false, text: '', isRed: true}}))
    }

    const blurInput = () => {
        if (login) {
            checkValidate()
        }
    }

    const next = () => {
        if (!checkValidate(true)) {
            return
        }
        dispatch(logInAction(login))
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
                    disabled={disabled}
                    onClick={next}
                    title={'Войти'}/>
            </div>
            {!disabled && <div>
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
            </div>}
            <LoaderBox>
                <LoaderAnimate/>
                {loading.process &&
                <LoadetText>
                    Отправляем код подтверждения...
                </LoadetText>}
                {loading.success &&
                <LoadetText>
                    Успешно!
                </LoadetText>}
                {loading.error &&
                <LoadetText>
                    Ошибка :(
                </LoadetText>}
            </LoaderBox>
        </PaddingBox>
    </LoginScreenContainer>
}

const mapStateToProps = (state: AllState) => ({...state.router, ...state.saga})
export default connect(mapStateToProps)(LoginScreen)