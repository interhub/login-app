import React, {useEffect} from "react";
import styled from "styled-components";
import {HiUser} from "react-icons/hi";
import COLOR from "../variable/COLOR";
import {connect, useDispatch} from "react-redux";
import {AllState, MessageType} from "../types/types";
import {showTopMessage} from "../store/actions";

const BannerContainer = styled.div<{ isError: boolean, visible: boolean }>`
  transition: top 0.5s ease;
  top: ${({visible}) => visible ? 0 : -200}px;
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  background-color: ${({isError}) => isError ? COLOR.ERR : COLOR.DARKBLUE};
  position:fixed;
  width: 100%;
  box-sizing: border-box;
`

const BannerTitle = styled.p`
color: #fff;
margin-left: 14px;
`

const TIME_INTERVAL = 3000;
//BLOCK ANIMATION REPEAT FOR PROCESS
let process = false

const TopBannerMessage = ({message}: { message: MessageType }) => {
    const {text, isRed, visible} = message;

    const dispatch = useDispatch()

    const hide = () => {
        dispatch(showTopMessage({message: {...message, visible: false}}))
    }

    useEffect(() => {
        if (visible && !process) {
            process = true
            setTimeout(() => {
                process = false
                hide()
            }, TIME_INTERVAL)
        }
    }, [message])

    return <BannerContainer
        onClick={hide}
        visible={visible} isError={isRed}>
        <HiUser size={40} color={'#fff'}/>
        <BannerTitle>
            {text}
        </BannerTitle>
    </BannerContainer>
}

const mapStateToProps = (state: AllState) => ({
    ...state.saga
})

export default connect(mapStateToProps)(TopBannerMessage)