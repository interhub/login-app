import React, {useEffect} from 'react';
import styled from 'styled-components'
import {connect, Provider, useDispatch} from 'react-redux';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {AllState} from "./types/types";
import {logInAction, logOutAction} from "./store/actions";
import {store} from "./store/store";
import ROUTES from "./variable/ROUTES";
import {ConnectedRouter} from 'connected-react-router'
import HISTORY from "./variable/HISTORY";
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import ErrorPage from "./screen/ErrorPage/ErrorPage";
import UserProfile from "./screen/UserProfile/UserProfile";
import CodeScreen from "./screen/CodeScreen/CodeScreen";
import RegScreen from "./screen/RegScreen/RegScreen";

const Container = styled.div`
background-color: blueviolet;
min-height: 100vh;
`

function App({user}: { user: any, }) {

    const dispatch = useDispatch()
    let history = useHistory();

    useEffect(()=>{
        //TODO CHECK USER LOGIN TOKIN
        if(true){
            history.push(ROUTES.LOG_IN)
        }
    },[])

    return (
        <Container>
            <Switch>
                <Route exact path={ROUTES.START}>
                    <Redirect to={ROUTES.LOG_IN}/>
                </Route>
                <Route path={ROUTES.LOG_IN}>
                    <LoginScreen/>
                </Route>
                <Route path={ROUTES.REG}>
                    <RegScreen/>
                </Route>
                <Route path={ROUTES.CODE}>
                    <CodeScreen/>
                </Route>
                <Route path={ROUTES.PROFILE}>
                    <UserProfile/>
                </Route>
                <Route path={'*'}>
                    <ErrorPage/>
                </Route>
            </Switch>
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
            <button
                onClick={() => {
                    history.push(ROUTES.PROFILE);
                }}
            >
                КАБИНЕТ
            </button>
            <button
                onClick={() => {
                    history.push(ROUTES.START);
                }}
            >
                ГЛАВНАЯ
            </button>
            <button
                onClick={() => {
                    history.push(ROUTES.CODE);
                }}
            >
                kode
            </button>
            <button
                onClick={() => {
                    history.push(ROUTES.REG);
                }}
            >
                REG
            </button>

            {/*<button*/}
            {/*onClick={()=>{*/}
            {/*    history.push('/')*/}
            {/*}}*/}
            {/*>*/}
            {/*    ссылка*/}
            {/*</button>*/}
            состояние - {user ? 'АВТОРИЗОВАН' : 'ВХОД ' + user}
            {user && <img src={user.message} width={window.innerWidth} alt=""/>}
        </Container>

    );
}

const mapStateToProps = (state: AllState) => {
    //TODO all ConnectedRouter
    console.log(state, 'ALL STATE')
    return {...state.saga, ...state.router}
}

const ConnectApp = connect(mapStateToProps)(App);

const ProviderApp = () =>
    <Provider store={store}>
        <ConnectedRouter history={HISTORY}>
            <ConnectApp/>
        </ConnectedRouter>
    </Provider>

export default ProviderApp
