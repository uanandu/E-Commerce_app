import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ItemProvider} from "./context/Context"

ReactDOM.render(
  <React.StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
