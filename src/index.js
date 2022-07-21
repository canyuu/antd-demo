import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './router';


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
