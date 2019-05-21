import React from 'react';
import './App.css';
import createRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import stores from './redux/store';

// 建立store
const store = stores();
// 建立路由
const routes = createRoutes();

const App = () => (
    <Provider store={store}>
        <BrowserRouter>{routes}</BrowserRouter>
    </Provider>
);

export default App;
