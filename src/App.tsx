import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
background-color: blueviolet;
min-height: 100vh;
`

function App() {

    const logined=false

    return (
        <Container>
            <button>
                Войти
            </button>
            состояние - {logined?'АВТОРИЗОВАН':'ВХОД'}
        </Container>
    );
}

export default App;
