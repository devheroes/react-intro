import React from 'react';
import ReactDOM from 'react-dom';
/* import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

/*
const rootEl = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'Introdução ao React';
h1.className = 'title';

rootEl.appendChild(h1); */

const rootEl = document.getElementById('root');

/* const h1 = React.createElement('h1', {
  className: 'title',
  children: React.createElement('span', null, 'Introdução ao React'),
}, text); */

// JSX
const text = 'Introdução ao React';
const className = 'title';
const h1 = (
  <h1 className={className}>
    <span>{text}</span>
  </h1>
);

ReactDOM.render(h1, rootEl);
