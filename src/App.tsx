import React from 'react';
import styled from 'styled-components'
import {connect, Provider, useDispatch} from 'react-redux';
import {Redirect, Route, Switch} from "react-router-dom";
import {AllState} from "./types/types";
import {logInAction, logOutAction} from "./store/actions";
import {store} from "./store/store";
import ROUTES from "./variable/ROUTES";
import {ConnectedRouter} from 'connected-react-router'
import HISTORY from "./variable/HISTORY";

const Container = styled.div`
background-color: blueviolet;
min-height: 100vh;
`

function App({user}: { user: any }) {

    const dispatch = useDispatch()

    return (
        <Container>
            <ConnectedRouter history={HISTORY}>
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect to={ROUTES.LOG_IN}/>
                    </Route>
                    <Route path={ROUTES.LOG_IN}>
                        hello / LOGINN
                    </Route>
                    <Route path={ROUTES.REG}>
                        hello / REG
                    </Route>
                    <Route path={ROUTES.CODE}>
                        hello / CODE
                    </Route>
                    <Route path={ROUTES.PROFILE}>
                        hello / USERSS
                    </Route>
                    <Route path={'*'}>
                        404 ERRR
                    </Route>
                </Switch>
            </ConnectedRouter>
            <button
                onClick={() => {
                    dispatch(logInAction('login success'))
                }}>
                Войти
            </button>
            <button
                onClick={() => {
                    dispatch(logOutAction())
                }}
            >
                Выйти
            </button>
            состояние - {user ? 'АВТОРИЗОВАН' : 'ВХОД ' + user}
            {user && <img src={user.message} width={window.innerWidth} alt=""/>}
        </Container>

    );
}

const mapStateToProps = (state: AllState) => {
    //TODO all ConnectedRouter
    return state.saga
}

const ConnectApp = connect(mapStateToProps)(App);

const ProviderApp = () =>
    <Provider store={store}>
        <ConnectApp/>
    </Provider>

export default ProviderApp
