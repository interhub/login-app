import React from "react";
import styled from "styled-components";
import BackHeaderTitle from "../../comps/BackHeaderTitle";
import ROUTES from "../../variable/ROUTES";
import {Link} from "react-router-dom";

const ErrorPageContainer = styled.div`
padding: 5px;
`

const LinkBox = styled.div`
font-weight: 600;
color: darkblue;
text-decoration: underline;
`

const ErrorPage = () => {
    return <ErrorPageContainer>
        <BackHeaderTitle title={'Ошибка 404'} size={20}/>
        <h3>
            Страница не существует
        </h3>
        <LinkBox>
            <Link to={ROUTES.START}>
                Вернуться на главную
            </Link>
        </LinkBox>
    </ErrorPageContainer>
}

export default ErrorPage