import React from 'react';
import ReactDOM from 'react-dom';

import {AuthProvider} from "./contexts/auth";
import App from './App';

ReactDOM.render(
    <AuthProvider>
        <App/>
    </AuthProvider>,
    document.getElementById('root')
);
