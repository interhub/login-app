import React from "react";
import styled, {keyframes} from "styled-components";
import {BiCheck, BiLoaderAlt, BiWindowClose} from "react-icons/bi";
import {connect} from "react-redux";
import {AllState, LoadingType} from "../types/types";
import COLOR from "../variable/COLOR";

const SIZE_LOADER = 60;

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

const LoaderFill = styled.div<{ process: boolean, error: boolean }>`
background-color: ${({error}) => error ? COLOR.ERR : COLOR.DARKBLUE};
height: ${SIZE_LOADER}px;
width: ${SIZE_LOADER}px;
border-radius: ${SIZE_LOADER}px;
justify-content: center;
align-items: center;
display: flex;
${({process}) => process ? 'animation' : 'none'}: ${rotate} 0.8s linear infinite;
`
const LoaderAnimate = ({loading: {visible, process, success, error}}: { loading: LoadingType }) => {
    if (!visible) {
        return null
    }
    return <LoaderAnimateBox>
        <LoaderFill error={error} process={process}>
            {process && <BiLoaderAlt color={'#fff'} size={40}/>}
            {success && <BiCheck color={'#fff'} size={40}/>}
            {error && <BiWindowClose color={'#fff'} size={40}/>}
        </LoaderFill>
    </LoaderAnimateBox>
}

const mapStateToProps = (state: AllState) => ({
    ...state.saga, ...state.router
})
export default connect(mapStateToProps)(LoaderAnimate)