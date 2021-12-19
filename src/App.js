import React from 'react';
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Userlist, ContentsList, AgreeTerms, Privacy, Ncs, Psat, Notice } from './pages';

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
          <Route exact path="/contents/ncs" element={<Ncs />} />
          <Route exact path="/contents/psat" element={<Psat />} />

          <Route exact path="/bbs/notice" element={<Notice />} />


        </Routes>
        <Footer />
    </BrowserRouter>

  );
};

export default App;