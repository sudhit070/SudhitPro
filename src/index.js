import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './_store/store';
import { Provider } from 'react-redux'


import './_assets/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);

// render()

// store.subscribe(render());