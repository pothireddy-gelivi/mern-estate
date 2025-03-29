
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <PersistGate loadig = { null } persistor = {persistor}>

      <App />
    </PersistGate>
  </Provider>,
);
