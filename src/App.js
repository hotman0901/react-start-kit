import React from 'react';
import './App.css';
import createRoutes from './routes/routes';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import stores, { history } from './redux/store';
import { Normalize } from 'styled-normalize';
import { ConnectedRouter } from 'connected-react-router';

// 建立store
const store = stores();
// 建立路由
const routes = createRoutes();

const App = () => (
    <Provider store={store}>
        <Normalize />
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Provider>
);

export default App;
