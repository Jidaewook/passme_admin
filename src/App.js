import React, { Fragment } from 'react';
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Userlist, ContentsList, AgreeTerms, Privacy } from './pages';

import { Footer, Navibar, Landing } from './components';

const App = () => {
  return (

    <BrowserRouter>
        <Navibar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/users" element={<Userlist />} />
          <Route exact path="/contents" element={<ContentsList />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/agreeterms" element={<AgreeTerms />} />

        </Routes>
        <Footer />
    </BrowserRouter>

    // <div className='App'>
    //   <Navibar />
    //   <Landing />
    //   <Footer />
    // </div>

  );
};

export default App;