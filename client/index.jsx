import React from 'react';
import ReactDOM from 'react-dom';
import DetailsApp from './components/DetailsApp';

const queryString = document.location.search;
const id = queryString.slice(1);



ReactDOM.render(<DetailsApp id={id} />, document.getElementById('details'));
