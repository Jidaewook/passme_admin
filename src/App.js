import React from 'react';
import "./App.css"
import { Footer, Navibar, Landing } from './components';

const App = () => {
  return (
    <div className='App'>
      <Navibar />
      <Landing />
      <Footer />
    </div>

  );
};

export default App;