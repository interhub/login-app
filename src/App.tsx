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
import TopBannerMessage from "./comps/TopBannerMessage";
import {Location} from "history";

const Container = styled.div`
min-height: 100vh;
//TODO MOBILE WIDTH
`

function App({location}: { location: Location }) {

    // const dispatch = useDispatch()
    let history = useHistory();

    useEffect(() => {
        console.log(location.pathname, 'PATCH')
        const allowStartPatch = [ROUTES.START, ROUTES.LOG_IN, ROUTES.REG, ROUTES.CODE]
        const isAuth = !!localStorage.getItem('tokens')
        const isAllowStartPatch: boolean = allowStartPatch.some((route) => route === location.pathname)
        if (isAllowStartPatch) {
            if (isAuth) {
                history.push(ROUTES.PROFILE)
            }
        }
    }, [location])

    return (
        <Container>
            <TopBannerMessage/>
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

const mapStateToProps = (state: AllState) => ({...state.saga, ...state.router})


export default connect(mapStateToProps)(App);
