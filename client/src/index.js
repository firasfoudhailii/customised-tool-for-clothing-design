import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PrototypesContextProvider, { PrototypesContext } from './context/Prototypes-context'



ReactDOM.render(
<BrowserRouter>
<PrototypesContextProvider>
    <App />
</PrototypesContextProvider>
</BrowserRouter>
,
 document.getElementById('root')
 );