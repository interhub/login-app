import React from 'react';
import styled from 'styled-components'
import {connect, Provider, useDispatch} from 'react-redux';
import {StateType, UserType} from "./types/types";
import {logInAction} from "./store/actions";
import {store} from "./store/store";

const Container = styled.div`
background-color: blueviolet;
min-height: 100vh;
`

function App({user}: { user: UserType }) {

    const logined = false
    console.log(user, 'user body')
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
            состояние - {user ? 'АВТОРИЗОВАН' : 'ВХОД'}
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
