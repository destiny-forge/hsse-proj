import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './App';

import './i18n';

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('app'));
