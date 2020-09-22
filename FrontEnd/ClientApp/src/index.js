import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import studentsReducer, { fetchStudents } from './components/studentSlice'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = configureStore({
  reducer: {
    students: studentsReducer
  }
})

store.dispatch(fetchStudents())

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

