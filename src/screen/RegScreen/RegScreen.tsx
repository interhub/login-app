import React, {useState} from "react";
import styled from "styled-components";
import TopBannerMessage from "../../comps/TopBannerMessage";
import BackHeaderTitle from "../../comps/BackHeaderTitle";
import InputForm from "../../comps/InputForm";
import ButtonNext from "../../comps/ButtonNext";
import replaceToPhone from "../../func/replaceToPhone";
import COLOR from "../../variable/COLOR";
import {HiOutlineCheck} from 'react-icons/hi'
import formatPhone from "../../func/formatPhone";

const RegScreenContainer = styled.div``

const PaddingBox = styled.div`
padding: 20px;
`

const LabelUnderline = styled.p`
color:#999;
font-size: 14px;
`

const CapchaBlock = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`

const LinkHref = styled.a`
color: blue;
text-decoration: underline;
`

const CapchaText = styled.p`
flex: 6
`

const CheckBox = styled.div<{ error: boolean, checked: boolean }>`
  outline: 2px solid ${({error}) => error ? COLOR.ERR : COLOR.DARKBLUE};
  background-color: ${({checked}) => checked ? COLOR.DARKBLUE : COLOR.WHITE};
  width: 25px;
  height: 25px ;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &:active{
    background-color: darkblue;
  }
`

const CapchaColumn = styled.div`
position: absolute;
bottom: 20px;
right: 20px;
left: 20px;
`

const RegScreen = () => {


    const [login, setLogin] = useState<string>('')
    const [err, setError] = useState<string>('')
    const [isClickError, setIsClickError] = useState<boolean>(false)

    const [checked, setChecked] = useState<boolean>(false)

    const checkValidate = (click?: boolean) => {
        let firstErr

        if (!formatPhone(login)) {
            firstErr = 'Поле «‎Номер телефона» заполнено неверно'
            setError(firstErr)
            if (click) {
                setIsClickError(true)
                return false
            }
        }
        if (!checked) {
            let secondErr = 'Чтобы создать аккаунт, Utair нужно ваше согласие на обработку данных'
            setError(secondErr)
            if (click) {
                setIsClickError(true)
                return false
            }
        }
        return true
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

    return <RegScreenContainer>
        <TopBannerMessage isClickError={isClickError} setIsClickError={setIsClickError} title={err}/>
        <BackHeaderTitle title={'Регистрация в Utair'} size={24}/>

        <PaddingBox>
            {/*FORM LOGIN TEXT*/}
            <InputForm
                value={login}
                onBlur={blurInput}
                callback={onInputLogin}
                err={err}
                label={'Номер телефона'}/>
            <LabelUnderline>
                Укажите ваш номер телефона. Он будет использоваться для входа в приложение
            </LabelUnderline>
            {/*CAPCHA BOX*/}
            <CapchaColumn>
                <CapchaBlock>
                    <div style={{flex: 1}}>
                        <CheckBox
                            onClick={() => {
                                setChecked(!checked)
                                setIsClickError(false)
                            }}
                            checked={checked} error={isClickError}>
                            <HiOutlineCheck color={'#fff'} size={25}/>
                        </CheckBox>
                    </div>
                    <CapchaText>Я ознакомлен с <LinkHref href="#">условиями использования моих персональных данных и даю
                        согласие</LinkHref> на их обработку</CapchaText>
                </CapchaBlock>
                <ButtonNext
                    onClick={() => {
                        checkValidate(true)
                    }}
                    title={'Продолжить'}/>
            </CapchaColumn>

            {/*LOGIN BTN*/}
        </PaddingBox>
    </RegScreenContainer>
}

export default RegScreen