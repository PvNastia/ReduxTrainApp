import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'; 
import { store } from './store';


import Header from './components/Header/Header';
import About from './components/About/About';
import Tests from './components/Tests/Tests';
import LearnTeor from './components/LearnTeor/LearnTeor';
import LoginSingUp from './components/LoginSingUp/LogInSignUp'
import TopicDetails from './components/LearnTeor/TopicDetails';

import NotFound from './components/NotFound/NotFound';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Provider store={store}>
    <BrowserRouter>
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/teor" element={<LearnTeor />} />
           <Route path="/log" element={<LoginSingUp/>} />
           <Route path="*" element={<NotFound />} />
           <Route path="/teor/:topicId" element={<TopicDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
