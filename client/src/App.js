import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/form';
import Main from './components/Main';
function App() {
 
  return(
    <div>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </div>
    
  );
}

const Routing = () => {
  return(
    <>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/form" exact element={<Form/>}/>
      </Routes>
    </>
  )
}

export default App;
