import React from "react";
import styled, {keyframes} from "styled-components";
import {HiUser} from "react-icons/hi";
import COLOR from "../variable/COLOR";

const anim = keyframes`
  from {
    transform: translateY(-100px);
  }

  to {
    transform: translateY(0);
  }
`;

//animation: ${anim} 0.5s ease;
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

export default ({title = '', isError = true, isClickError, setIsClickError}: { title?: string, isError?: boolean, isClickError: boolean, setIsClickError: (visible: boolean) => void }) => {


    return <BannerContainer
        onClick={()=>setIsClickError(false)}
        visible={isClickError} isError={isError}>
        <HiUser size={40} color={'#fff'}/>
        <BannerTitle>
            {title}
        </BannerTitle>
    </BannerContainer>
}