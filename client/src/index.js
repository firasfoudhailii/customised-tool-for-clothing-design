import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PrototypesContextProvider, { PrototypesContext } from './context/Prototypes-context'
import MydesignsContextProvider , { MydesignsContext } from './context/mydesigns-context'



ReactDOM.render(
<BrowserRouter>
<PrototypesContextProvider>
<MydesignsContextProvider>
    <App />
</MydesignsContextProvider>
</PrototypesContextProvider>
</BrowserRouter>
,
 document.getElementById('root')
 );