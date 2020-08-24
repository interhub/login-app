import React, {useEffect} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {AllState} from "./types/types";
import ROUTES from "./variable/ROUTES";
import LoginScreen from "./screen/LoginScreen/LoginScreen";
import ErrorPage from "./screen/ErrorPage/ErrorPage";
import UserProfile from "./screen/UserProfile/UserProfile";
import CodeScreen from "./screen/CodeScreen/CodeScreen";
import RegScreen from "./screen/RegScreen/RegScreen";

const Container = styled.div`
min-height: 100vh;
`

function App({user}: { user: any, }) {

    // const dispatch = useDispatch()
    let history = useHistory();

    useEffect(() => {
        //TODO CHECK USER LOGIN TOKIN
        if (true) {
            history.push(ROUTES.LOG_IN)
        }
    }, [])

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
        </Container>

    );
}

const mapStateToProps = (state: AllState) => {
    //TODO all ConnectedRouter
    console.log(state, 'ALL STATE')
    return {...state.saga, ...state.router}
}

export default connect(mapStateToProps)(App);
