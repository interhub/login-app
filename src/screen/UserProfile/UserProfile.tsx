import React, {useEffect} from "react";
import styled from "styled-components";
import {connect, useDispatch} from "react-redux";
import {getUserDataAction, logOutAction} from "../../store/actions";

const UserProfileContainer = styled.div``

const UserProfile = () => {

    const dispatch = useDispatch()

    const logOut=()=>{
      dispatch(logOutAction())
    }

    useEffect(()=>{
        dispatch(getUserDataAction())
    },[])

    return <UserProfileContainer>
        Страница пользователя
        <br/><br/>
        <button onClick={logOut} >Выйти</button>
    </UserProfileContainer>
}

export default connect()(UserProfile)