import React from 'react';
import './App.css';
import createRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
    const routes = createRoutes();
    return (
        <BrowserRouter>
            <div className="App">{routes}</div>
        </BrowserRouter>
    );
}

export default App;
