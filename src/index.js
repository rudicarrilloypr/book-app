import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

const Index = () => {
  const [appId, setAppId] = useState(localStorage.getItem('app_id'));

  useEffect(() => {
    if (!appId) {
      axios
        .post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/')
        .then((response) => {
          const newAppId = response.data;
          localStorage.setItem('app_id', newAppId);
          setAppId(newAppId);
          // eslint-disable-next-line no-console
          console.log('App ID obtenido y guardado:', newAppId);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('Error al obtener app_id', error);
        });
    } else {
      // eslint-disable-next-line no-console
      console.log('App ID obtenido del localStorage:', appId);
    }
  }, [appId]);

  if (!appId) {
    return <div>Loading...</div>;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);
