import React from "react";
import styled, {keyframes} from "styled-components";
import {BiLoaderAlt} from "react-icons/bi";
import {BiWindowClose} from "react-icons/bi";
import {BiCheck} from "react-icons/bi";

const SIZE_LOADER = 60;
//TODO 3 STATE
//LOAD
//ERROR
//SUCCESS

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const LoaderAnimateBox = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

const LoaderFill = styled.div`
background-color: darkblue;
height: ${SIZE_LOADER}px;
width: ${SIZE_LOADER}px;
border-radius: ${SIZE_LOADER}px;
 justify-content: center;
 align-items: center;
 display: flex;
 animation: ${rotate} 0.8s linear infinite;

`
const LoaderAnimate = () => {
    return <LoaderAnimateBox>
        <LoaderFill>
            <BiLoaderAlt color={'#fff'} size={40}/>
            {/*<BiCheck color={'#fff'} size={40}/>*/}
            {/*<BiWindowClose color={'#fff'} size={40}/>*/}
        </LoaderFill>
    </LoaderAnimateBox>
}

export default LoaderAnimate