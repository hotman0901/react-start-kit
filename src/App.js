import React from 'react';
import './App.css';
import createRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import stores from './redux/store';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

// normalize css
const GlobalStyle = createGlobalStyle`
    ${normalize}
    body {
        padding: 0;
    }
`;

// 建立store
const store = stores();
// 建立路由
const routes = createRoutes();

const App = () => (
    <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>{routes}</BrowserRouter>
    </Provider>
);

export default App;
