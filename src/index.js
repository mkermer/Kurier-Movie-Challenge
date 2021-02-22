import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistor, store } from './reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
// import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate persistor={persistor} loading={<span>Loading...</span>} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();
