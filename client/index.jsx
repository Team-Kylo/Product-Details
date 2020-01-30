import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const queryString = document.location.search;
const id = queryString.slice(1);

ReactDOM.render(<App id={id} />, document.getElementById('root'));
