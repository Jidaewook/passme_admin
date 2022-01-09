import React from 'react';
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Userlist, ContentsList, AgreeTerms, Privacy, Ncs, ContentsDetail, Psat, Notice, UserDetail, BbsDetail, Bbs, NoticeDetail, Register } from './pages';

import { Footer, Navibar, Landing } from './components';

const App = () => {
  return (

    <BrowserRouter>
        <Navibar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/users" element={<Userlist />} />
          <Route exact path="/users/:id" element={<UserDetail />} />

          <Route exact path="/contents" element={<ContentsList />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/agreeterms" element={<AgreeTerms />} />
          <Route exact path="/contents/ncs" element={<Ncs />} />
          <Route exact path="/contents/ncs/:id" element={<ContentsDetail />} />
          <Route exact path="/contents/psat/:id" element={<ContentsDetail />} />

          <Route exact path="/contents/psat" element={<Psat />} />

          <Route exact path="/bbs/bbs" element={<Bbs />} />
          <Route exact path="/bbs/bbs/:id" element={<BbsDetail />} />

          <Route exact path="/bbs/notice" element={<Notice />} />
          <Route exact path="/bbs/notice/:id" element={<NoticeDetail />} />

          <Route exact path="/register/:category" element={<Register />} />


        </Routes>
        <Footer />
    </BrowserRouter>

  );
};

export default App;