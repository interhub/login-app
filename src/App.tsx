import React from 'react';
import styled from 'styled-components'
import {connect, Provider, useDispatch} from 'react-redux';
import {StateType, UserType} from "./types/types";
import {logInAction, logOutAction} from "./store/actions";
import {store} from "./store/store";

const Container = styled.div`
background-color: blueviolet;
min-height: 100vh;
`

function App({user}: { user: any }) {

    const dispatch = useDispatch()

    return (
        <Container>
            <button
                onClick={() => {
                    dispatch(logInAction('login success'))
                }}
            >
                Войти
            </button>
            <button
                onClick={() => {
                    dispatch(logOutAction( ))
                }}
            >
                Выйти
            </button>
            состояние - {user ? 'АВТОРИЗОВАН' : 'ВХОД '+ user}
            { user && <img src={user.message} width={window.innerWidth} alt=""/>}
        </Container>

    );
}

const mapStateToProps = (state: StateType<UserType>) => (state)

const ConnectApp = connect(mapStateToProps)(App);

const ProviderApp = () =>
    <Provider store={store}>
        <ConnectApp/>
    </Provider>

export default ProviderApp
